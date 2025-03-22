# ベースイメージを指定
FROM node:18-alpine

# 作業ディレクトリを作成
WORKDIR /root

# パッケージファイルをコピー
COPY package.json package-lock.json ./

# 依存関係をインストール
RUN npm install

# アプリケーションのソースコードをコピー
COPY .next /root/.next
COPY app /root/app
COPY componets /root/componets
COPY features /root/features
COPY hooks /root/hooks
COPY public /root/public
COPY styles /root/styles
COPY utils /root/utils
COPY next.config.js /root/next.config.js
COPY tsconfig.json /root/tsconfig.json
COPY .env /root/.env
COPY package.json /root/package.jso
COPY .env /root/.env




# ビルド
RUN npm run build

# ポートを公開
EXPOSE 3030

# アプリケーションを起動
CMD ["npm", "start"]