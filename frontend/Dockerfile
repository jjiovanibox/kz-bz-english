# ベースイメージを指定
FROM node:18-alpine

# 作業ディレクトリを作成
WORKDIR /app

# アプリケーションのソースコードをコピー
COPY frontend .

# 依存関係をインストール
# RUN npm install

# # ビルド
# RUN npm run build

# ポートを公開
EXPOSE 3030

# アプリケーションを起動
CMD ["npm", "start"]