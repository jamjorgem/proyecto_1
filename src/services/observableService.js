import { Observable, subscribeOn, Subscriber } from 'rxjs';

export const getNumbers = new Observable(Subscriber => {
    Subscriber.next(1);
    Subscriber.next(2);
    Subscriber.next(3);
    setTimeout(() => {
        Subscriber.next(4);
        Subscriber.complete();
    }, 1000);
})