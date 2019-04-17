import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JokeService {
  private static jokes = [
    "Today at the bank, an old lady asked me to help check her balance. So I pushed her over.",
    "I bought some shoes from a drug dealer. I don't know what he laced them with, but I've been tripping all day.",
    "I told my girlfriend she drew her eyebrows too high. She seemed surprised.",
    "My dog used to chase people on a bike a lot. It got so bad, finally I had to take his bike away.",
    "I'm so good at sleeping. I can do it with my eyes closed."
  ]
  constructor() { }
  public static pickone(){
    return this.jokes[Math.floor(Math.random() * (this.jokes.length -1))]
  }
}
