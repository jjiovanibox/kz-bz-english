import Image from "next/image";

export default function Concept() {
  return (
    <div className="concept-container text-center mt-12">
      <h1 className="text-4xl font-bold mb-8">コンセプト</h1>
      <Image
        src="images/concept.svg"
        alt="英会話カフェのコンセプト"
        width={800}
        height={400}
        className="mx-auto mb-8 rounded-lg shadow-md"
      />
      <p className="text-lg mb-4">
        私たちの英会話カフェでは、日常生活を送るように自然な形で英会話を学ぶことをコンセプトとしています。
      </p>
      <p className="text-lg mb-4">
        リラックスした雰囲気の中で、実際の生活シーンを想定した会話を通じて、実践的な英語力を身につけましょう。
      </p>
      <p className="text-lg mb-4">
        初心者から上級者まで、どなたでも参加できる多彩なレッスンをご用意しています。
      </p>
      <p className="text-lg mb-4">
        英語を学ぶだけでなく、異文化交流や新しい友達作りの場としてもご利用いただけます。
      </p>
    </div>
  );
}