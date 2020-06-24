Pact Broker testing space

## Travis Webhook
```json
{
  "events": [{
    "name": "contract_content_changed"
  }],
  "request": {
    "method": "POST",
    "url": "https://api.travis-ci.com/repo/yangyu823%2Fpact-workshop-js-v1/requests",
    "headers": {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Travis-API-Version": "3",
      "Authorization": "token Aw4s5fnNJr9hOAq27DCTpQ"
    },
    "body": {
      "request": {
        "message": "Triggered by changed pact for ${pactbroker.consumerName} version ${pactbroker.consumerVersionNumber}",
        "branch":"provider"
      }
    }
  }
}
```

## CloudBuild WebHook
https://cloud.google.com/cloud-build/docs/api/reference/rest/v1/RepoSource
https://cloud.google.com/cloud-build/docs/api/reference/rest/v1/projects.triggers/run


curl --request POST \
  'https://cloudbuild.googleapis.com/v1/projects/poc-pact-broker/triggers/4dd759d0-ecdc-4dd9-ad55-af6dd1d32524:run' \
  --header "Authorization: Bearer $(gcloud config config-helper --format='value(credential.access_token)')" \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{"branchName":"provider","repoName":"pact-workshop-js-v1"}' \
  --compressed

curl --request POST \
  'https://cloudbuild.googleapis.com/v1/projects/poc-pact-broker/triggers/4dd759d0-ecdc-4dd9-ad55-af6dd1d32524:run' \
  --header 'Authorization: Bearer ya29.a0AfH6SMCB2AdNF-gsxtUwSY6Ymq9Bm9c7qs5Z2ylGBfD4KT3PtBszY3-c2TCZjSd83nQnjPisv-UMSJ7iGrHHbrbauMFwggrsu2objQltaHL9ZD8Dx-isVfRfmGGigk0kljiBA8Xu-qiYzD45YjhlhTiIlPqsSXsXvugrR-Knt3GYrw' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{"branchName":"provider","repoName":"pact-workshop-js-v1"}' \
  --compressed


curl -X POST -T request.json -H "Authorization: Bearer $(gcloud config config-helper --format='value(credential.access_token)')" https://cloudbuild.googleapis.com/v1/projects/poc-pact-broker/triggers/4dd759d0-ecdc-4dd9-ad55-af6dd1d32524:run




```json
{
  "events": [{
    "name": "contract_content_changed"
  }],
  "request": {
    "method": "POST",
    "url": "https://cloudbuild.googleapis.com/v1/projects/poc-pact-broker/triggers/4dd759d0-ecdc-4dd9-ad55-af6dd1d32524:run",
    "headers": {
      "Authorization": "Bearer $(gcloud config config-helper --format='value(credential.access_token)')",
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    "body": {
      "branchName": "provider",
      "repoName": "pact-workshop-js-v1"
    }
  }
}

```

```bash
export PACT_BROKER_BASE_URL="http://35.244.95.135/"
export PACT_BROKER_USERNAME="CSPUsr2"
export PACT_BROKER_PASSWORD="Password1"
export BEAR_TOKEN=$(gcloud config config-helper --format='value(credential.access_token)')
```
## can-i-deploy
```bash
docker run --rm \
 -e PACT_BROKER_BASE_URL \
 -e PACT_BROKER_USERNAME \
 -e PACT_BROKER_PASSWORD \
  pactfoundation/pact-cli:latest \
  broker can-i-deploy \
  --pacticipant 'PoC_consumer' \
  --latest
```

## Create or Update webhook
```bash
docker run --rm \
 -e PACT_BROKER_BASE_URL \
 -e PACT_BROKER_USERNAME \
 -e PACT_BROKER_PASSWORD \
  pactfoundation/pact-cli:latest \
  broker create-or-update-webhook \
  --request=POST \
  --consumer='PoC_consumer' \
  --uuid='09f5cc1b-0386-4ca3-a599-aaf7cafb6804'\
  --contract-content-changed \
  --header="Content-Type: application/json" \
  --header="Accept: application/json" \
  --header="Authorization : Bearer "$GCP_TOKEN

```



```bash
  --broker-base-url="http://35.244.95.135/" \
  --broker-username="CSPUsr2" \
  --broker-password="Password1" \
```


```bash
docker run --rm \
 -e PACT_BROKER_BASE_URL \
 -e PACT_BROKER_USERNAME \
 -e PACT_BROKER_PASSWORD \
  pactfoundation/pact-cli:latest \
  broker create-webhook "https://cloudbuild.googleapis.com/v1/projects/poc-pact-broker/triggers/4dd759d0-ecdc-4dd9-ad55-af6dd1d32524:run" \
  --request=POST \
  --data='{"branchName": "provider",
      "repoName": "pact-workshop-js-v1"}' \
  --consumer='PoC_consumer' \
  --provider='PoC_provider' \
  --contract-content-changed \
  --header="Content-Type: application/json" \
  --header="Accept: application/json" \
  --header="Authorization : Bearer "$BEAR_TOKEN
```
