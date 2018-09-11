#!/usr/bin/env bash

ansible-galaxy install -r requirements.yml

ansible-playbook site.yml -i hosts -e "host_username=hackathon nodejs_version=8.x" -vvvv
