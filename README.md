## Dialogflow Fulfillment Basic Slot Filling Sample

Slot filling simplifies your agent by letting you obtain multiple, required parameters within a single intent. If any parameters are missing from a user utterance, your agent will automatically prompt users for the required parameters.

## Setup
To create this agent from our template:

<a href="https://console.dialogflow.com/api-client/oneclick?templateUrl=https://oneclickgithub.appspot.com/dialogflow/fulfillment-slot-filling-nodejs" target="blank">
  <img src="https://dialogflow.com/images/deploy.png">
</a>

### Option 2: Firebase CLI
1. Create a [Dialogflow Agent](https://console.dialogflow.com/).
2. `git clone https://github.com/dialogflow/fulfillment-slot-filling-nodejs.git`
3. Go to **Settings** ⚙ > **Export and Import** > **Restore from zip** using the `dialogflow-agent.zip` in this directory.
4. `cd` to the `functions` directory
5. Run `npm install`.
6. Install the Firebase CLI by running `npm install -g firebase-tools`
7. Login with your Google account, `firebase login`
8.  Add your project to the sample with `firebase use <project ID>`
  + In Dialogflow console under **Settings** ⚙ > **General** tab > copy **Project ID**.
9. Run `firebase deploy --only functions:dialogflowFulfillment`
10. Back in Dialogflow Console > **Fulfullment** > **Enable** Webhook.
11. Paste the URL from the Firebase Console’s events column into the **URL** field > **Save**.

## Samples
For all [Dialogflow-Fulfillment](https://github.com/topics/dialogflow-fulfillment) samples on Github, available in Node.js and Python.

For Fulfillment Webhook [JSON requests & responses](https://github.com/dialogflow/fulfillment-webhook-json).

## References & Issues
+ Questions? Try [StackOverflow](https://stackoverflow.com/questions/tagged/dialogflow) or [Dialogflow Developer Community](https://plus.google.com/communities/103318168784860581977).
+ For bugs, please report an issue on [Github](https://github.com/dialogflow/dialogflow-fulfillment-nodejs/issues).
+ Dialogflow [Documentation](https://docs.dialogflow.com).
+ Dialogflow [Classes Reference Doc](https://github.com/dialogflow/dialogflow-fulfillment-nodejs/tree/master/docs).
+ For more info on [Actions on Google NPM module](https://github.com/actions-on-google/actions-on-google-nodejs)
+ For more info on [Building Actions on Google with Dialogflow Agents Documentation](https://developers.google.com/actions/dialogflow/)

## Make Contributions
Please read and follow the steps in the CONTRIBUTING.md

## License
See LICENSE.md

## Terms
Your use of this sample is subject to, and by using or downloading the sample files you agree to comply with, the [Google APIs Terms of Service](https://developers.google.com/terms/) and [Dialogflow's Terms of Use and Privacy Policy](https://dialogflow.com/terms-and-privacy).
