<template>
  <div class="w-100 d-flex flex-column justify-content-center">
    <div class="container">
      <div class="w-100 d-flex">
        <input
          type="text"
          class="form-control"
          @keypress.enter="addToNewData"
          v-model="message"
          placeholder="enter your message"
        />
        <button class="btn btn-success mx-2" @click="addToNewData">add</button>
        <button class="btn btn-primary" @click="getAllDataM">get</button>
      </div>
    </div>
    <hr class="my-4" />
    <div class="container">
      <div class="row">
        <div
          class="card bg-dark text-white m-2"
          v-for="todo in alltodos"
          :key="todo.id"
          style="max-width: 18rem"
        >
          <div class="card-header">{{ todo.created.seconds }}</div>
          <div class="card-body">
            <h5 class="card-title" @dblclick="delToData(todo.id)">
              {{ todo.title }}
            </h5>
            <p class="card-text">
              {{ todo.completed }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../Firebase.js";
import {
  collection,
  getDocs,
  serverTimestamp,
  addDoc,
  doc,
  deleteDoc,
} from "firebase/firestore/lite";
export default {
  name: "GetData",
  data() {
    return {
      alltodos: [],
      message: "",
    };
  },
  methods: {
    async getAllDataM() {
      const todosCol = collection(db, "todos");
      const todoSnapshot = await getDocs(todosCol);
      this.alltodos = [];
      todoSnapshot.docs.map((doc) => {
        this.alltodos.push({ ...doc.data(), id: doc.id });
      });
    },
    async addToNewData() {
      const docRef = await addDoc(collection(db, "todos"), {
        completed: false,
        created: serverTimestamp(),
        title: this.message,
      });
      console.log("Document written with ID: ", docRef.id);
      this.message = "";
      this.alltodos = [];
      this.getAllDataM();
    },
    async delToData(id) {
      const docRef = doc(db, "todos", id);
      await deleteDoc(docRef)
        .then(() => {
          console.log("deleted successful");
          this.alltodos = [];
          this.getAllDataM();
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<style></style>
