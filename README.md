
# 서비스 바로가기
[![큐!](https://user-images.githubusercontent.com/75469212/161385626-4f27e984-73a6-4dab-bd65-26e621277f2e.png)](https://everyque.com)

<br>
<br>
<br>

# ![Group 914](https://user-images.githubusercontent.com/75469212/161385687-89427e8a-f856-42e7-95c4-87de710b9efa.png) 프로젝트 개요
질 높은 비대면 온라인 수업을 위한 실시간 스트리밍 교육 플랫폼
<br>
<br>

# 팀원 소개 ![Group 915](https://user-images.githubusercontent.com/75469212/161385748-951e7cfb-8949-4610-90cc-4b9f4d3f7109.png)

<table>
  <tr>
    <th>이름</th>
    <th>역할</th>
    <th>Github</th>
  </tr>
    <tr>
    <td>공정용</td>
    <td>백엔드</td>
    <td>https://gitdub.com/XPECTER</td>
  </tr>
    <tr>
    <td>조상현</td>
    <td>백엔드</td>
    <td>https://github.com/ChoSangHyeon</td>
  </tr>
  <tr>
    <td>문성현</td>
    <td>프론트엔드</td>
    <td>https://gitdub.com/SunghyeonMoon</td>
  </tr>  
  <tr>
    <td>김우현</td>
    <td>프론트엔드</td>
    <td>https://gitdub.com/woogod1031</td>
  </tr>
    <tr>
    <td>박진희</td>
    <td>디자인</td>
    <td></td>
  </tr>
    <tr>
    <td>이현주</td>
    <td>디자인</td>
    <td></td>
  </tr>
</table>

<br>

# 기술 스택

## FE

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=000000"/> <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=FFFFFF"/> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=FFFFFF"/>  
<img src="https://img.shields.io/badge/styled-components-DB7093?style=for-the-badge&logo=styled-components&logoColor=FFFFFF"/>
<img src="https://img.shields.io/badge/Router-CA4245?style=for-the-badge&logo=React Router&logoColor=FFFFFF"/>
<br>
<img src="https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=Socket.io&logoColor=FFFFFF"/>
<img src="https://img.shields.io/badge/JSON Web Tokens-000000?style=for-the-badge&logo=JSON Web Tokens&logoColor=FFFFFF"/>

<br />


## BE

<img src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=NestJS&logoColor=FFFFFF"/> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=FFFFFF"/> <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=000000"/>  
<img src="https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=Jenkins&logoColor=000000"/>
<img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=000000"/>
<img src="https://img.shields.io/badge/FFmpeg-007808?style=for-the-badge&logo=FFmpeg&logoColor=000000"/>
<br>
<img src="https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=Socket.io&logoColor=FFFFFF"/>
<img src="https://img.shields.io/badge/JSON Web Tokens-000000?style=for-the-badge&logo=JSON Web Tokens&logoColor=FFFFFF"/>

<br>
<br>


## ETC

<img src="https://img.shields.io/badge/Amazon AWS-232F3E?style=for-the-badge&logo=Amazon AWS&logoColor=FFFFFF"/> <img src="https://img.shields.io/badge/GitHub Actions-2088FF?style=for-the-badge&logo=GitHub Actions&logoColor=FFFFFF"/> <img src="https://img.shields.io/badge/OBS Studio-302E31?style=for-the-badge&logo=OBS Studio&logoColor=000000"/>
<br>
<img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=ESLint&logoColor=FFFFFF"/> <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=Prettier&logoColor=FFFFFF"/> <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=Figma&logoColor=FFFFFF"/>

<br>
<br>

## 프론트엔드 기술 선정 이유
## FE

1. React
    1. 프로젝트에 채팅, 달력 일정 표시, 할 일 목록 표시 등, 동적인 요소가 많아서 효율적으로 유지 보수하고 관리할 수 있도록 자바스크립트 라이브러리를 도입
    2. 앞서 얘기했던 복잡한 컴포넌트들을 단위별로 쪼개서 작업을 할 수 있기 때문에 생산성과 유지 보수성을 높여준다.
    3. JSX를 통해서 Javascript 하나만으로 마크업과 로직을 짤 수 있다.
    4. Virtual DOM을 통한 랜더링 과정의 효율성 증가
2. Redux
    1. 전역 상태 관리 라이브러리 도입 이유 - 유저 정보, 모달 등 일회성이지 않거나, 단일 컴포넌트 내에서만 사용되지 않는 상태 관리를 위해
    2. Redux 선택 이유
        1. 상태 관리를 store 하나에서 관리함으로써 상태의 중앙화를 얻을 수 있다.
        2. Reducer를 통해서 상태 변경을 시켜서 Side Effect가 없이 직관적인 상태 관리를 할 수 있다. 
        3. Recoil도 적은 코드량과 조금 더 리액트스럽게 상태 관리 할 수 있다는 점에서 이번 프로젝트의 상태 관리 라이브러리로 사용하려고 하였으나, 개인적으로 아직까지는 다양한 패턴에 대한 예시가 부족하다고 생각이 되어 Redux를 선택. 
        4. Recoil에 비해 레퍼런스가 많고, 사용자 풀이 넓다는 장점이 있지만, 과도하게 많은 보일러 플레이트라는 단점이 존재. 하지만 Redux Toolkit을 도입함으로써 단점 상쇄 
3. Styled-Components
    1. 로직과 스타일을 한 파일 내에서 같이 관리하여 모듈화하기 쉽다.
    2. className을 사용하지 않아도 되기 때문에 중복을 피할 수 있으며, 한 파일 내에서도 스타일과 로직을 분리해서 작성할 수 있어서 작업 편리성을 높여준다.
    3. 스타일을 주입하려면 모두 컴포넌트로 만들어야 한다는 단점이 존재, 하지만 Nesting 문법을 사용해서 단점을 상쇄할 수 있고, 오히려 HTML 태그 하나하나에 자체적인 이름을 부여함으로써  더욱 더 직관적인 개발이 가능하다고 생각된다.
4. Typescript
    1. 개인 프로젝트 같이 규모가 작거나, 혼자 작업하는 프로젝트라면 자바스크립트로 작성하더라도 에러를 비교적 쉽게 찾을 수 있고, 해결할 수 있다. 그러나 규모가 있는 팀 프로젝트라면 자바스크립트의 버그를 찾기가 점점 더 어려워지고 다른 그 코드가 타인의 코드라면 더욱 더 어려워진다. 타입 스크립트는 자바스크립트의 고질적인 문제인 Type관련 상세한 메세지를 제공함으로써 개발에 있어서 실수를 줄여준다.
    2. 다만 Typescript를 사용하면 interface, type 등 부가적인 코드가 발생하고, 때때론 어떤 타입을 지정해야 하는지 몰라서 오히려 개발 시간을 지연 시킬 수 있다. 그러나 앞서 얘기했던 type관련 에러 방지와, IDE에서 제공하는 자동 완성, 타입 확인 기능들을 통해서 오히려 장기적인 관점에서 개발 시간을 단축시켜준다고 생각한다. 이러한 이유들로 현재 프로젝트에 타입스크립트 도입
5. JWT
    1. 쿠키에 비해 높은 보안성, 시그니처를 통한 위변조 막을 수 있다.
    2. 토큰 기반으로 다른 로그인 시스템에 접근 및 권한 공유가 가능해서 카카오나 구글 등의 다른 신뢰도 있는 기업의 인증을 사용 할 수 있다(가장 중요 - 무분별한 가입을 막되 가입은 편리하도록).
    3. 서버에서 별도의 저장소가 필요 없어서 간단하게 인증 절차를 구현할 수 있다.
    4. 그러나 토큰을 탈취 당했을 때 대처하기가 힘들다. 그래서 Interceptor를 통한 Access Token과 함께 Refresh 토큰을 발급하는 방법을 사용하였다. 이렇게 한다면 서버가 Refresh token을 만료 시킬 수 있는 세션과 비슷한 장점을 가질 수 있지만, 앞서 얘기했던 서버에 별도의 저장 공간이 필요해지기 때문에 앞서 말한 장점 하나를 포기해야겠지만, 현재 프로젝트에서 가장 적절한 방안이라 생각되어 이 방식을 채택하게 되었다.
<br>
<br>

# 서비스 아키텍쳐
![서비스 ](https://user-images.githubusercontent.com/75469212/161908137-bfbe31e2-6583-44ad-8d0e-377060646fcd.png)
