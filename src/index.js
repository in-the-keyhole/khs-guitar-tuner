/*Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an
"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied.  See the License for the
specific language governing permissions and limitations
under the License.
*/

import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './main/webapp/react/components/nav.jsx';

const express = require('express')
const path = require('path')
const app = express()

// serve static assets normally
app.use(express.static(__dirname + '/public'))

// Handles all routes so you do not get a not found error
app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(port)
console.log("server started on port " + port)

ReactDOM.render(<Navigation />, document.getElementById('root'));