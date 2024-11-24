import { Injectable } from '@angular/core';
import { LambdaClient, InvokeCommand } from "@aws-sdk/client-lambda";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-providers";

@Injectable({
  providedIn: 'root'
})
export class AwsLambdaService {

  private lambdaClient: LambdaClient;

  constructor() {
    this.lambdaClient = new LambdaClient({
      region: 'Europe',  
      credentials: fromCognitoIdentityPool({
        identityPoolId: '761351693273', 
        clientConfig: { region: 'Europe' }
      })
    });
  }

  // Function to invoke a Lambda
  async invokeLambdaFunction(payload: any): Promise<any> {
    try {
      const command = new InvokeCommand({
        FunctionName: 'getMail', 
        Payload: new TextEncoder().encode(JSON.stringify(payload))
      });

      const response = await this.lambdaClient.send(command);
      const decodedPayload = new TextDecoder('utf-8').decode(response.Payload);
      return JSON.parse(decodedPayload);
    } catch (error) {
      console.error("Error invoking Lambda:", error);
      throw error;
    }
  }
}
