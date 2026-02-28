param(
  [string]$TargetUrl = "https://test.k6.io"
)

# Run using Docker (mount current folder)
$pwdPath = ${PWD}.Path
docker run --rm -e TARGET_URL=$TargetUrl -v "$pwdPath:/scripts" loadimpact/k6 run /scripts/scripts/load_test.js
