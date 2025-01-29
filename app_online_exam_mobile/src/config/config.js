export const environment = () => {
    
    const hostname = window && window.location && window.location.hostname;

    if(hostname.includes('dev')) {
        return "dev"
    } else if(hostname.includes('test')) {
        return "test"
    } else if(hostname.includes('uat')) {
        return "uat"
    } else {
       return "local";
    }
};

export const getEnvironmentUrl = () => {

    const env = "mobile";
    let API_ENDPOINT = "";
    if (env === "dev") {
        API_ENDPOINT = "https://online-exam-apim.azure-api.net/";
    } else if (env ===  "test") {
        API_ENDPOINT = "https://online-exam-apim-test.azure-api.net/";
    } else {
        API_ENDPOINT = "https://fn-app-online-exam-user.azurewebsites.net/";
    }
    console.log(`Returning Endpoint ${API_ENDPOINT} Based on the ${env}`);
    return API_ENDPOINT;
}