# 결혼식 초대장 웹 앱

## 📝 기능

- **반응형 디자인**: 데스크톱과 모바일 기기에서 반응형으로 웹을 제공
- **결혼식 정보**: 날짜, 시간, 장소 및 기타 중요한 정보를 표시
- **갤러리**: 사진 갤러리 섹션
- **지도 통합**: 게스트가 쉽게 장소를 찾을 수 있도록 Google 지도를 연동
- - **이미지, 폰트 최적화**: webpack-font-preload-plugin으로 폰트를 미리 로드하여 속도개선

## 🚀 시작하기

### 사전 준비

시작하기 전에, 로컬 머신에 다음이 설치되어 있는지 확인하세요.

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### 설치

1. **리포지토리 클론**:

   ```bash
   git clone git@github.com:manonkim2/wedding_invitation.git
   ```

2. **프로젝트 디렉토리로 이동**:

   ```bash
   cd wedding-invitation
   ```

3. **의존성 설치**:

   ```bash
   yarn install
   ```

### 실행

앱을 로컬에서 실행하려면 다음 명령어를 사용하세요:

```bash
yarn dev:db
yarn start
```

앱은 브라우저에서 `http://localhost:3000`에서 확인할 수 있습니다.
