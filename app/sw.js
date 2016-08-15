/*
*
*  Push Notifications codelab
*  Copyright 2015 Google Inc. All rights reserved.
*
*  Licensed under the Apache License, Version 2.0 (the "License");
*  you may not use this file except in compliance with the License.
*  You may obtain a copy of the License at
*
*      https://www.apache.org/licenses/LICENSE-2.0
*
*  Unless required by applicable law or agreed to in writing, software
*  distributed under the License is distributed on an "AS IS" BASIS,
*  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*  See the License for the specific language governing permissions and
*  limitations under the License
*
*/

// Version 0.1

'use strict';
console.log('Started', self);

self.addEventListener('install', function(event) {
  self.skipWaiting();
  console.log('Installed', event);
});

self.addEventListener('activate', function(event) {
  console.log('Activated', event);
});

self.addEventListener('push', function(event) {
  console.log('Push message', event);

  var title = 'Push message';

  event.waitUntil(
    self.registration.showNotification(title, {
     body: 'The Message',
     icon: 'images/icon.png',
     tag: 'my-tag'
   }));
});
// curl --header "Authorization: key=AIzaSyBMhD_HsXCjCRF2VZGJH5gDwa5btrwrxPw" --header "Content-Type: application/json" https://android.googleapis.com/gcm/send -d "{\"registration_ids\":[\"dNnOx-NoHCE:APA91bGNxNRRHakh5BLWqzltEJjISfuebE_JftzRvtlQmy5WHjdj2-0r2SLJBJRBFY-D7SAp4eWlTmLfNdkKler2VrOohlFGOQwp7wlnDkCS1wGBVkryUck4-ZbcGAu45YJ87FZOcw20\"]}"



// TODO
