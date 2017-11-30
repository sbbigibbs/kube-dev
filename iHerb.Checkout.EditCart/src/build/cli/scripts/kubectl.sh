#!/bin/sh

kubectl --kubeconfig=../scripts/config port-forward -n=checkout "$(kubectl --kubeconfig=../scripts/config -n=checkout get pods -l k8s-app=nginx-ingress-lb -o=jsonpath='{.items..metadata.name}')" 4443:443