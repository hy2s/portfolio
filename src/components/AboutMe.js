const AboutMe = () => {
  return (
    <section id="aboutme">
      <div className="section-wrap">
        <div className="section-title">
          <h3>저는 이런 사람이에요.</h3>
          <h1>ABOUT ME</h1>
        </div>
        <div className="aboutme-content">
          <div className="left">
            <img src={`${process.env.PUBLIC_URL}/images/profile.png`} alt="프로필 사진"/>
            <div className="left-text-top">
              <p>“ The user experience is the product. ”</p>
              <h3>매사에 <span>역지사지</span>로 생각하며,<br/>
                  <span>사용자 경험</span>을 가장 중요하게 여깁니다.</h3>
            </div>
            <div className="left-text-bottom">
              <p><span>2025. 08</span>
                MBC 아카데미 컴퓨터 교육센터 <br/>
                [웹디자인, 웹퍼블리셔 국비 과정] 수료
              </p>
              <p><span>2025. 02</span>
                남서울대학교 멀티미디어학과 졸업
              </p>
            </div>
          </div>
          <div className="right">
            <div className="right-card">
              <h3>강점 및 성향</h3>
              <h2>1px의 중요성, 그리고 함께하는 소통</h2>
              <p>작은 픽셀 하나까지 신경 쓰는 디테일과, 끊임없이 소통하며 함께 완성도를 높이는 협업력을 갖추고 있습니다.</p>
            </div>
            <div className="right-card">
              <h3>디자인 시작하게 된 이유</h3>
              <h2>사용자의 시선에서 출발하다</h2>
              <p>평소 다양한 웹사이트와 앱을 사용하며 느낀 불편함을, 더 나은 경험으로 바꿔보고 싶다는 생각이 계기가 되어 디자인의 길을 걷게 되었습니다.</p>
            </div>
            <div className="right-card">
              <h3>방향 및 목표</h3>
              <h2>경험을 설계하는 디자이너로</h2>
              <p>UI/UX 디자이너로서 전문성을 쌓고, 나아가 제품 전반의 경험을 설계하는 프로덕트 디자이너로 성장하는 것이 목표입니다.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;