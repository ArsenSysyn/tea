// index.js - A simple tea Protocol demo simulation

console.log("Welcome to the tea Protocol Demo!");

// Simulate onboarding a developer and creating a wallet
function onboardDeveloper(developerInfo) {
    console.log(`Onboarding developer: ${developerInfo.name}`);
    // Simulate creating a digital wallet
    const walletAddress = "0x123FakeWalletAddress";
    console.log(`Wallet created at address: ${walletAddress}`);
    return walletAddress;
}

// Simulate registering an open-source project with the tea Protocol
function registerProject(projectInfo) {
    console.log(`Registering project: ${projectInfo.name}`);
    // Simulate successful project registration
    const projectId = "proj-123456";
    console.log(`Project registered with ID: ${projectId}`);
    return projectId;
}

// Simulate receiving TEA tokens for a project
function receiveTokens(projectId) {
    const tokensReceived = 100; // Mock token amount received
    console.log(`Project ${projectId} received ${tokensReceived} TEA tokens.`);
}

// Example Usage
const developerInfo = {
    name: "Alice",
    email: "alice@example.com"
};

const projectInfo = {
    name: "Open Source Project",
    repositoryUrl: "https://github.com/alice/open-source-project"
};

const walletAddress = onboardDeveloper(developerInfo);
const projectId = registerProject(projectInfo);
receiveTokens(projectId);

console.log("Demo completed. Check out the tea Protocol for more!");
