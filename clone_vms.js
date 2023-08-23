const axios = require('axios');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const argv = yargs(hideBin(process.argv))
  .option('url', {
      alias: 'u',
      description: 'TrueNAS URL',
      type: 'string',
  })
  .option('username', {
      alias: 'n',
      description: 'TrueNAS Username',
      type: 'string',
  })
  .option('password', {
      alias: 'p',
      description: 'TrueNAS Password',
      type: 'string',
  })
  .option('template_vm_id', {
      alias: 't',
      description: 'Template VM ID',
      type: 'string',
  })
  .option('num_vms', {
      alias: 'v',
      description: 'Number of VMs to create',
      type: 'number',
  })
  .help()
  .alias('help', 'h')
  .argv;

const createVms = async (url, username, password, template_vm_id, num_vms) => {
  try {
    const loginResponse = await axios.post(`${url}/api/v2.0/auth/login`, {
      username: username,
      password: password,
    });

    const token = loginResponse.headers['x-auth-token'];

    for (let i = 1; i <= num_vms; i++) {
      const payload = {
        name: `New_Clone_VM_${i}`,
        description: 'Cloned from template',
      };

      const response = await axios.post(
        `${url}/api/v2.0/vm/${template_vm_id}/clone/`,
        payload,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        console.log(`VM ${i} cloned successfully!`);
      } else {
        console.log(`Failed to clone VM ${i}. Response: ${response.statusText}`);
      }
    }

    await axios.post(`${url}/api/v2.0/auth/logout`, null, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error(`An error occurred: ${error}`);
  }
};

createVms(argv.url, argv.username, argv.password, argv.template_vm_id, argv.num_vms);
