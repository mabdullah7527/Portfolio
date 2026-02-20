import { type InsertMessage, type Message } from "@shared/schema";

export interface IStorage {
  createMessage(message: InsertMessage): Promise<Message>;
}

export class MemoryStorage implements IStorage {
  private messages: Message[] = [];
  private id = 1;

  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const message: Message = {
      id: this.id++,
      ...insertMessage,
      createdAt: new Date(),
    };
    this.messages.push(message);
    console.log("📧 Message received:", message);
    return message;
  }
}

export const storage = new MemoryStorage();
