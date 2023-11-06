class Vehicle {
  //Vehicle 클래스를 설정
  constructor(x, y, mass, rad, speedMx, forceMx, color) {
    //class에 받아올 내용 괄호에 넣기
    this.pos = createVector(x, y); // 위치 백터 생성 초기값(x,y)
    this.vel = p5.Vector.random2D(); //초기 속도를 무작위로 생성
    this.acc = createVector(); // 가속도 셍성 및 백터화
    this.mass = mass; // mass 값을 질랑으로 질량 설정
    this.rad = rad; // rad 값을 반지름으로 반지름 설정
    this.speedMx = speedMx; //speedMx값을 최대속도로 최대속도 설정
    this.forceMx = forceMx; //forceMx값을 최대힘으로 최대힘 설정
    this.neighborhooodRad = 50; //주변과 상호작용하는 반경을 50으로 설정
    this.color = color; //color 값을 색으로 색 설정
  }

  cohesion(others) {
    //응집력 계산 cohesion이라는 함수를 설정 (other를 받아옴)
    let cnt = 0; //cnt 변수 설정 (값 0)
    const steer = createVector(0, 0); //steer 함수 선언 후 벡터화 및 초기값 0,0으로 설정
    others.forEach((each) => {
      //각각의 힘 계산
      if (each !== this) {
        //자신을 제외한 다른 요소에 대해 실행
        const distSq =
          (this.pos.x - each.pos.x) ** 2 + (this.pos.y - each.pos.y) ** 2; //거리의 제곱을 계산
        if (distSq < this.neighborhooodRad ** 2) {
          // 이웃 범위 내에 있는 경우
          steer.add(each.pos); //steer에 다른 요소의 위치를 더함
          cnt++; // 이웃의 수 증가
        }
      }
    });

    //주변 개체가 0보다 클 때
    if (cnt > 0) {
      steer.div(cnt); //steer를 주변 개체 수로 나누기 (평균 도출)
      steer.sub(this.pos); // steer에 현재 위치를 빼기 (목표로하는 곳 - 내 위치)
      steer.setMag(this.speedMx); //steer의 최대속도를 제한
      steer.sub(this.vel); //steer의 현재 속도를 빼기
      steer.limit(this.forceMx); // forceMx값으로 제한
    }
    return steer; //steer 값 반환
  }

  align(others) {
    //align 함수 설정 및 others 받아오기
    let cnt = 0; //cnt 변수 설정, 값 0으로 지정
    const steer = createVector(0, 0); //steer 선언 후 초기값 0,0으로 벡터화
    others.forEach((each) => {
      //각각의 힘 계산
      if (each !== this) {
        //자신을 제외한 다른 요소에 대해 실행
        const distSq =
          (this.pos.x - each.pos.x) ** 2 + (this.pos.y - each.pos.y) ** 2; //거리의 제곱을 계산
        if (distSq < this.neighborhooodRad ** 2) {
          //이웃 범위  내에 있는 경우
          steer.add(each.vel); //steer에 다른요소의 속도 더하기
          cnt++; // 수 증가
        }
      }
    });
    if (cnt > 0) {
      //cnt 값이 0보다 클 때
      steer.div(cnt); //steer을 cnt로 나누기
      steer.setMag(this.speedMx); //최대속도로 길이를 제한
      steer.sub(this.vel); //steer의 현재 속도를 빼기
      steer.limit(this.forceMx); // forceMx값으로 제한
    }
    return steer; //steer 값 반환
  }

  separate(others) {
    //separate 함수 설정 및 others 받아오기
    let cnt = 0; //cnt 변수 설정, 값 0으로 지정
    const steer = createVector(0, 0); //steer 선언 후 초기값 0,0으로 벡터화
    others.forEach((each) => {
      //모든 다른 입자들에 의해 반복
      if (each !== this) {
        //자신을 제외한 다른 요소일 경우
        const dist = this.pos.dist(each.pos); //요소 간의 거리 계산
        if (dist > 0 && this.rad + each.rad > dist) {
          //요소 간의 거리가 0보다 크고, 총돌 반지름 합보다는 작은 경우
          const distNormal = dist / (this.rad + each.rad); //정규화된 거리를 계산
          const towardMeVec = p5.Vector.sub(this.pos, each.pos); //충돌한 원의 벡터 = 현재 나의 위치 - 충돌한 원의 위치로 현재 위치에서 다른 요소를 향하는 벡터 계산
          towardMeVec.setMag(1 / distNormal); //towardMeVec의 값을 1/distNormal로 제한
          steer.add(towardMeVec); // steer에 towardMeVec 더하기
          cnt++; //cnt 수 증가
        }
      }
    });

    if (cnt > 0) {
      //cnt 값이 0보다 클 때 (주변에 요소가 존재할 경우)
      steer.div(cnt); //주변 요소 평균 방향 계산
      steer.setMag(this.speedMx); // 힘 벡터의 크기를 최대속도로 설정
      steer.sub(this.vel); // 현재 속도에서 힘 벡터를 빼기
      steer.limit(this.forceMx); // 힘 벡터의 크기를 최대 힘으로 제한
    }
    return steer; //최종 힘 벡터를 반환
  }

  applyForce(force) {
    //주어진 힘 요소에 적용
    const forceDivedByMass = p5.Vector.div(force, this.mass); //forceDivedByMass에 force 나누기 질량 값을 할당
    this.acc.add(forceDivedByMass); //가속도에 forceDivedByMass를 더하기
  }

  update() {
    //아래 내용을 업데이트
    this.vel.add(this.acc); //속도에 가속도를 더함
    this.vel.limit(this.speedMx); //속도를 최대 속도로 제한
    this.pos.add(this.vel); //위치에 속도를 더함
    this.acc.mult(0); // 가속도 초기화
  }

  borderInfinite() {
    //요소가 화면을 벗어나면 반대편으로 이동시키는 함수
    if (this.pos.x < -infiniteOffset) {
      this.pos.x = width + infiniteOffset; // 왼쪽 화면을 벗어난 경우에 오른쪽 화면으로 이동
    } else if (this.pos.x > width + infiniteOffset) {
      this.pos.x = -infiniteOffset; //오른쪽 화면을 벗어난 경우 왼쪽 화면으로 이동
    }
    if (this.pos.y < -infiniteOffset) {
      this.pos.y = height + infiniteOffset; //위쪽 화면을 벗어난 경우 아래쪽 화면으로 이동
    } else if (this.pos.y > height + infiniteOffset) {
      this.pos.y = -infiniteOffset; //아래쪽 화면을 벗어난 경우 위쪽 화면으로 이동
    }
  }

  display() {
    //요소를 화면에 보이도록 하는 함수
    push(); //현재의 상태를 저장
    translate(this.pos.x, this.pos.y); //현재 입자의 위치로 이동
    rotate(this.vel.heading()); //입자의 속도를 벡터의 각도만큼 회전
    noStroke(); //윤곽선 없음
    fill(this.color); //색상으로 채우기
    beginShape(); // 다각형 그리기 시작
    vertex(this.rad, 0); //다각형의 꼭지점 반지름 값, 0 위치
    vertex(this.rad * cos(radians(-135)), this.rad * sin(radians(-135))); //다각형의 꼭지점 그리기 -135도로 rad만큼 떨어진 좌표 x,y
    vertex(0, 0); //다각형의 중심점 0,0
    vertex(this.rad * cos(radians(135)), this.rad * sin(radians(135))); //다각형의 꼭지점 그리기 135도로 rad만큼 떨어진 좌표 x,y
    endShape(CLOSE); //다각형 그리기 종료
    pop(); //이전의 변환상태로 복구
  }
}
