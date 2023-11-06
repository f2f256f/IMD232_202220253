class Traffic {
  //Traffic 클래스 선언
  constructor() {
    //변수를 설정
    this.vehicles = []; // vechicles array 생성
  }

  run() {
    //실행
    this.vehicles.forEach((eachVehicle) => {
      //각각의 Vehicle에 대해 아래 내용 실행
      const separate = eachVehicle.separate(this.vehicles); // spearate 변수 생성 후 vehicles 힘을 나눈 값 할당 = 일정 거리를 유지
      separate.mult(1); //separate 값을 1로 설정
      eachVehicle.applyForce(separate); // spearate 값을 각 vehicle에 저장
      const align = eachVehicle.align(this.vehicles); // align변수 설정 후 vehicle간의 정렬 값 저장
      align.mult(0.5); // align 값 0.5로 설정
      eachVehicle.applyForce(align); //각 vehicle의 값을 align에 저장
      const cohesion = eachVehicle.cohesion(this.vehicles); // cohesion 변수 생성 후 각 vehicle에 응집 값 저장
      cohesion.mult(0.5); //cohesion 값 0.5로 설정
      eachVehicle.applyForce(cohesion); // 각 vehicle에 cohesion값을 적용
      eachVehicle.update(); //vehicle 업데이트
      eachVehicle.borderInfinite(); //borderInfinite 함수를 실행
      eachVehicle.display(); //vehicle을 그리기
    });
  }

  addVehicle(x, y) {
    //vehicle 추가
    const mass = 1; //질량 1로 설정
    this.vehicles.push(
      //vehicle에 아래 내용 저장
      new Vehicle(x, y, mass, mass * 12, 5, 0.1, color(random(360), 100, 40)) //새로운 vehicle에 괄호 안 내용을 추가 (x,y,질량,질량*12,5,0.1,랜덤색상)
    );
  }
}
