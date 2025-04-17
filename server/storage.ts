import { 
  users, 
  type User, 
  type InsertUser, 
  type InsertBooking, 
  type Booking, 
  type InsertContact, 
  type Contact
} from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createBooking(booking: InsertBooking): Promise<Booking>;
  createContact(contact: InsertContact): Promise<Contact>;
  getBookings(): Promise<Booking[]>;
  getContacts(): Promise<Contact[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private bookings: Map<number, Booking>;
  private contacts: Map<number, Contact>;
  private userCurrentId: number;
  private bookingCurrentId: number;
  private contactCurrentId: number;

  constructor() {
    this.users = new Map();
    this.bookings = new Map();
    this.contacts = new Map();
    this.userCurrentId = 1;
    this.bookingCurrentId = 1;
    this.contactCurrentId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createBooking(insertBooking: InsertBooking): Promise<Booking> {
    const id = this.bookingCurrentId++;
    const now = new Date();
    const booking: Booking = { 
      ...insertBooking, 
      id,
      createdAt: now 
    };
    this.bookings.set(id, booking);
    return booking;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.contactCurrentId++;
    const now = new Date();
    const contact: Contact = { 
      ...insertContact, 
      id,
      createdAt: now 
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getBookings(): Promise<Booking[]> {
    return Array.from(this.bookings.values());
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }
}

export const storage = new MemStorage();
