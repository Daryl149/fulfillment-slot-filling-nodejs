/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
 'use strict';

 const admin = require('firebase-admin');
 const functions = require('firebase-functions'); 
 const {WebhookClient} = require('dialogflow-fulfillment');

 process.env.DEBUG = 'dialogflow:debug';

 const ADLIBS_INTENT = 'makeAdlibStory';

 exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
   const agent = new WebhookClient({request, response});
   console.log('Req headers: ' + JSON.stringify(request.headers));
   console.log('Req body: ' + JSON.stringify(request.body));

   function makeAdlibs(agent) {
     const [givenname, lastname, unitcurrency] = [agent.parameters['given-name'], agent.parameters['last-name'], agent.parameters['unit-currency']];
     let missingSlots = [];
     if (!givenname) { missingSlots.push('givenname'); }
     if (!lastname) { missingSlots.push('lastname'); }
     if (!unitcurrency) { missingSlots.push('unitcurrency'); }

     if (missingSlots.length === 1){
        agent.add(`Looks like you didn't provide a ${missingSlots[0]}`);
      }
      else if (missingSlots.length === 2){
         agent.add(`Ok, I need two more things, a ${missingSlots[0]} and ${missingSlots[1]}`);
     }
     else if (missingSlots.length === 3){
         agent.add(`Ok, I need all 3 things still: a ${missingSlots[0]}, ${missingSlots[1]}, and ${missingSlots[2]}`);
     } else {
       agent.add(`So you want to transfer ${unitcurrency["amount"]} ${unitcurrency["currency"]} to ${givenname} ${lastname}.`);
     }
   }

   let intentMap = new Map();
   intentMap.set(ADLIBS_INTENT, makeAdlibs);
   agent.handleRequest(intentMap);
 });
