// Created & Designed by Prasad Madhuranga @2023
import { openDB } from 'idb';

// Set up the database
const db = await openDB('settings-store', 1, {
    upgrade(db) {
      db.createObjectStore('settings');
    },
  });

  // Save content to database on edit
editor.onUpdate(async (content) => {
    await db.put('settings', content, 'content');
  });

  editor.setContent((await db.get('settings', 'content')) || defaultText);