'use strict'

const functions = require('firebase-functions');
const express = require('express')
const admin = require('firebase-admin')

// Configuración del administrador de firebase
const serviceAccount = require("./assets/serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://hecho-en-valpo.firebaseio.com/'
});


