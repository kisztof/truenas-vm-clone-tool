# TrueNAS VM Clone Tool

This Node.js script allows you to automate the creation of virtual machines (VMs) in TrueNAS SCALE by cloning a specified template VM. You can specify the number of VMs you want to create, the template to use, and the authentication details for your TrueNAS system.

## Prerequisites

- Node.js (tested with version 14.x or higher)
- TrueNAS SCALE (ensure the API is accessible)

## Installation

First, clone the repository or download the script. Then navigate to the directory containing the script and install the required dependencies:

```bash
yarn install
```

## Usage

The script accepts the following command-line arguments:

- `--url`: The URL of your TrueNAS system.
- `--username`: Your TrueNAS username.
- `--password`: Your TrueNAS password.
- `--template_vm_id`: The ID of the template VM that you want to clone.
- `--num_vms`: The number of VMs you want to create.

Example command:

```bash
node clone_vms.js --url http://your-truenas-ip --username YOUR_USERNAME --password YOUR_PASSWORD --template_vm_id YOUR_TEMPLATE_VM_ID --num_vms 10
```

Replace the placeholders with your specific details.

## Warning

Please use this script with caution, especially in a production environment. Ensure that you have the necessary resources available in your system for the number of VMs you want to create.

## Support and Contribution

Feel free to open an issue if you find any problems or have suggestions. Contributions through pull requests are welcome.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.