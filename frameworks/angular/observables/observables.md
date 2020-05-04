# Usage of observables in Angular
Observables are a powerful way to emit and receive data. Care must be taken
however to ensure that subscriptions are unsubscribed in order to prevent memory
leaks. This can be done in a few ways,
[takeWhile](https://www.learnrxjs.io/operators/filtering/takewhile.html),
[takeUntil](https://www.learnrxjs.io/operators/filtering/takeuntil.html),
[first](https://www.learnrxjs.io/operators/filtering/first.html), and
[take(1)](https://www.learnrxjs.io/operators/filtering/take.html).

The difference between `first` and `take(1)` is explained here:
https://stackoverflow.com/a/42346203.

## Preferred use in components
A component often needs an observable object in order to display the
authenticated user's name for example. This component will probably be created
and destroyed multiple times when the user is navigating or other actions occur.
When destruction occurs you should unsubscribe from subscription you no longer
need.

The preferred usage is creating a class level ReplaySubject which will keep
track of the components state. Example:

```TypeScript
export class Component implements OnDestroy, OnInit {
    private readonly destroyed = new ReplaySubject<void>();

    constructor(
        private readonly authService: AuthService,
    ) {
    }

    ngOnDestroy(): void {
        this.destroyed.next();
        this.destroyed.complete();
    }

    ngOnInit(): void {
        this.authService.getUser().pipe(
            takeUntil(this.destroyed),
        ).subscribe(console.log);
    }
}
```

When the component is destroyed, the destroyed observable will emit which will make
the `takeUntil` operator complete the subscription.
