export default function Pricing() {
    return (
      <div className="pricing-container max-w-7xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-center my-8">料金表</h1>
        <div className="pricing-cards grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">ベーシックプラン</h2>
            <p className="text-gray-700 mb-4">月額 ¥5,000</p>
            <ul className="text-gray-600 mb-4">
              <li>週1回のレッスン</li>
              <li>グループレッスン</li>
              <li>教材費込み</li>
            </ul>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">申し込む</button>
          </div>
          <div className="card bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">スタンダードプラン</h2>
            <p className="text-gray-700 mb-4">月額 ¥10,000</p>
            <ul className="text-gray-600 mb-4">
              <li>週2回のレッスン</li>
              <li>グループレッスン</li>
              <li>教材費込み</li>
            </ul>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">申し込む</button>
          </div>
          <div className="card bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">プレミアムプラン</h2>
            <p className="text-gray-700 mb-4">月額 ¥20,000</p>
            <ul className="text-gray-600 mb-4">
              <li>週3回のレッスン</li>
              <li>プライベートレッスン</li>
              <li>教材費込み</li>
            </ul>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">申し込む</button>
          </div>
        </div>
      </div>
    );
  }