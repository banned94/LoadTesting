k6 load testing project

Quickstart

- Run with Docker (recommended):

```powershell
# run from repo root (k6-project)
docker run --rm -v ${PWD}:/scripts -e TARGET_URL=https://test.k6.io loadimpact/k6 run /scripts/scripts/load_test.js
```

- Run with Docker Compose:

```powershell
docker-compose up --abort-on-container-exit --build
```

- Run locally if you have k6 installed:

```powershell
k6 run --env TARGET_URL=https://test.k6.io scripts/load_test.js
```

Files

- scripts/load_test.js: example k6 script
- docker-compose.yml: Docker Compose to run k6
- run_k6.ps1: convenience PowerShell runner

Customize

- Edit `scripts/load_test.js` to modify scenarios, thresholds, and target URL.
