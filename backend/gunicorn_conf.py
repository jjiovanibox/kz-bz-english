import multiprocessing

# サーバーのバインドアドレスとポート
bind = "0.0.0.0:8080"

# 利用可能な CPU コア数に基づいてワーカー数を設定
workers = multiprocessing.cpu_count() * 2 + 1

# 各ワーカーで使用するスレッド数
threads = 2

# ワーカーの種類を指定
worker_class = "uvicorn.workers.UvicornWorker"

# タイムアウト設定（秒）
timeout = 120