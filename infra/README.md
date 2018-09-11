Environment setup
---
## Install roles from Ansible galaxy
```
ansible-galaxy install -r requirements.yml
```

## Replace IP address in hosts
```
your_ip_address -> ip address
```
## Provision environment
```
ansible-playbook site.yml -i hosts -e "host_username=hackathon nodejs_version=8.x"
```
