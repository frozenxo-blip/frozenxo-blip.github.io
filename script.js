document.getElementById('runCommand').addEventListener('click', runCommand);
document.getElementById('input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        runCommand();
    }
});

function runCommand() {
    const inputElement = document.getElementById('input');
    const outputElement = document.getElementById('output');
    const command = inputElement.value;

    if (command) {
        outputElement.innerHTML += `<div>&gt; ${command}</div>`;
        executeCommand(command);
        inputElement.value = '';
        outputElement.scrollTop = outputElement.scrollHeight;
    }
}

function executeCommand(command) {
    const outputElement = document.getElementById('output');
    setTimeout(() => {
        switch (command.toLowerCase()) {
            case 'hack mainframe':
                outputElement.innerHTML += '<div>Accessing mainframe...</div>';
                setTimeout(() => {
                    outputElement.innerHTML += '<div>Bypassing security...</div>';
                    setTimeout(() => {
                        outputElement.innerHTML += '<div>Success! Mainframe hacked.</div>';
                    }, 2000);
                }, 2000);
                break;
            case 'ddos attack':
                outputElement.innerHTML += '<div>Starting DDoS attack...</div>';
                setTimeout(() => {
                    outputElement.innerHTML += '<div>Sending packets...</div>';
                    setTimeout(() => {
                        outputElement.innerHTML += '<div>Success! Target is down.</div>';
                    }, 2000);
                }, 2000);
                break;
            case 'list users':
                outputElement.innerHTML += '<div>Fetching user list...</div>';
                setTimeout(() => {
                    outputElement.innerHTML += '<div>Users: admin, user1, user2, user3</div>';
                }, 2000);
                break;
            default:
                outputElement.innerHTML += `<div>Unknown command: ${command}</div>`;
                break;
        }
        outputElement.scrollTop = outputElement.scrollHeight;
    }, 500);
}
