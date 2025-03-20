export default function Lessons() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>レッスン内容</h1>
        <p>ここでは、私たちの英会話教室で提供しているレッスンの内容をご紹介します。</p>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li style={{ margin: "10px 0" }}>・初心者向け英会話</li>
          <li style={{ margin: "10px 0" }}>・中級者向け英会話</li>
          <li style={{ margin: "10px 0" }}>・ビジネス英会話</li>
          <li style={{ margin: "10px 0" }}>・旅行英会話</li>
          <li style={{ margin: "10px 0" }}>・子供向け英会話</li>
        </ul>
      </div>
    );
  }