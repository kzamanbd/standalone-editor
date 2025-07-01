export const LANGUAGE_VERSIONS = {
    javascript: '18.15.0',
    typescript: '5.0.3',
    python: '3.10.0',
    java: '15.0.2',
    php: '8.2.3',
    log: '1.0.0'
};

export const CODE_SNIPPETS = {
    javascript: ` // javascript
function createUser(name, age) {
    return { name, age };
}

function isAdult(user) {
    return user.age >= 18;
}

function printUserInfo(user) {
    const status = isAdult(user) ? "an adult" : "a minor";
    console.log(\`\${user.name} is \${status}.\`);
}

const users = [
    createUser("Alex", 22),
    createUser("Bob", 16),
    createUser("Charlie", 30)
];

users.forEach(printUserInfo);
`,

    typescript: ` // typescript
type User = {
    name: string;
    age: number;
};

function createUser(name: string, age: number): User {
    return { name, age };
}

function isAdult(user: User): boolean {
    return user.age >= 18;
}

function printUserInfo(user: User): void {
    const status = isAdult(user) ? "an adult" : "a minor";
    console.log(\`\${user.name} is \${status}.\`);
}

const users: User[] = [
    createUser("Alex", 22),
    createUser("Bob", 16),
    createUser("Charlie", 30)
];

users.forEach(printUserInfo);
`,

    python: ` // python
class User:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def is_adult(self):
        return self.age >= 18

    def print_info(self):
        status = "an adult" if self.is_adult() else "a minor"
        print(f"{self.name} is {status}.")

users = [
    User("Alex", 22),
    User("Bob", 16),
    User("Charlie", 30)
]

for user in users:
    user.print_info()
`,

    java: ` // java
public class User {
    String name;
    int age;

    User(String name, int age) {
        this.name = name;
        this.age = age;
    }

    boolean isAdult() {
        return age >= 18;
    }

    void printInfo() {
        String status = isAdult() ? "an adult" : "a minor";
        System.out.println(name + " is " + status + ".");
    }

    public static void main(String[] args) {
        User[] users = {
            new User("Alex", 22),
            new User("Bob", 16),
            new User("Charlie", 30)
        };
        for (User user : users) {
            user.printInfo();
        }
    }
}
`,

    php: `<?php

class User {
    public string $name;
    public int $age;

    public function __construct(string $name, int $age) {
        $this->name = $name;
        $this->age = $age;
    }

    public function isAdult(): bool {
        return $this->age >= 18;
    }

    public function printInfo(): void {
        $status = $this->isAdult() ? "an adult" : "a minor";
        echo "{$this->name} is $status.";
    }
}

$users = [
    new User("Alex", 22),
    new User("Bob", 16),
    new User("Charlie", 30)
];

foreach ($users as $user) {
    $user->printInfo();
}
`,

    log: `[25-Jun-2025 09:32:48 UTC] PHP Deprecated:  Hook woocommerce_rest_api_option_permissions is <strong>deprecated</strong> since version 6.3.0 with no alternative available. in /Users/kzaman/Herd/dokan/wp-includes/functions.php on line 6121
[25-Jun-2025 09:32:48 UTC] PHP Deprecated:  Hook woocommerce_rest_api_option_permissions is <strong>deprecated</strong> since version 6.3.0 with no alternative available. in /Users/kzaman/Herd/dokan/wp-includes/functions.php on line 6121
[25-Jun-2025 10:07:55 UTC] PHP Deprecated:  Hook woocommerce_rest_api_option_permissions is <strong>deprecated</strong> since version 6.3.0 with no alternative available. in /Users/kzaman/Herd/dokan/wp-includes/functions.php on line 6121
[25-Jun-2025 10:07:55 UTC] PHP Deprecated:  Hook woocommerce_rest_api_option_permissions is <strong>deprecated</strong> since version 6.3.0 with no alternative available. in /Users/kzaman/Herd/dokan/wp-includes/functions.php on line 6121
[25-Jun-2025 10:07:55 UTC] PHP Deprecated:  Hook woocommerce_rest_api_option_permissions is <strong>deprecated</strong> since version 6.3.0 with no alternative available. in /Users/kzaman/Herd/dokan/wp-includes/functions.php on line 6121
[25-Jun-2025 10:07:55 UTC] PHP Deprecated:  Hook woocommerce_rest_api_option_permissions is <strong>deprecated</strong> since version 6.3.0 with no alternative available. in /Users/kzaman/Herd/dokan/wp-includes/functions.php on line 6121
[25-Jun-2025 10:07:55 UTC] PHP Deprecated:  Hook woocommerce_rest_api_option_permissions is <strong>deprecated</strong> since version 6.3.0 with no alternative available. in /Users/kzaman/Herd/dokan/wp-includes/functions.php on line 6121
[25-Jun-2025 10:07:55 UTC] PHP Deprecated:  Hook woocommerce_rest_api_option_permissions is <strong>deprecated</strong> since version 6.3.0 with no alternative available. in /Users/kzaman/Herd/dokan/wp-includes/functions.php on line 6121
[30-Jun-2025 02:08:10 UTC] Automatic updates starting...
[30-Jun-2025 02:08:10 UTC]   Automatic plugin updates starting...
[30-Jun-2025 02:08:10 UTC]   Automatic plugin updates complete.
[30-Jun-2025 02:08:10 UTC]   Automatic theme updates starting...
[30-Jun-2025 02:08:10 UTC]   Automatic theme updates complete.
[30-Jun-2025 02:08:10 UTC] Automatic updates complete.
[30-Jun-2025 05:09:26 UTC] PHP Warning:  Trying to access array offset on null in /Users/kzaman/Herd/dokan/wp-content/plugins/dokan-lite/includes/Order/VendorBalanceUpdateHandler.php on line 169
[30-Jun-2025 05:09:26 UTC] PHP Warning:  Trying to access array offset on null in /Users/kzaman/Herd/dokan/wp-content/plugins/dokan-lite/includes/Order/VendorBalanceUpdateHandler.php on line 170
[30-Jun-2025 05:09:26 UTC] PHP Warning:  Trying to access array offset on null in /Users/kzaman/Herd/dokan/wp-content/plugins/dokan-lite/includes/Order/VendorBalanceUpdateHandler.php on line 169
[30-Jun-2025 05:09:26 UTC] PHP Warning:  Trying to access array offset on null in /Users/kzaman/Herd/dokan/wp-content/plugins/dokan-lite/includes/Order/VendorBalanceUpdateHandler.php on line 170
[30-Jun-2025 05:09:26 UTC] PHP Warning:  Trying to access array offset on null in /Users/kzaman/Herd/dokan/wp-content/plugins/dokan-lite/includes/Order/VendorBalanceUpdateHandler.php on line 169
[30-Jun-2025 05:09:26 UTC] PHP Warning:  Trying to access array offset on null in /Users/kzaman/Herd/dokan/wp-content/plugins/dokan-lite/includes/Order/VendorBalanceUpdateHandler.php on line 170
[30-Jun-2025 05:09:27 UTC] PHP Warning:  Trying to access array offset on null in /Users/kzaman/Herd/dokan/wp-content/plugins/dokan-lite/includes/Order/VendorBalanceUpdateHandler.php on line 169
[30-Jun-2025 05:09:27 UTC] PHP Warning:  Trying to access array offset on null in /Users/kzaman/Herd/dokan/wp-content/plugins/dokan-lite/includes/Order/VendorBalanceUpdateHandler.php on line 170
[30-Jun-2025 05:09:27 UTC] PHP Warning:  Trying to access array offset on null in /Users/kzaman/Herd/dokan/wp-content/plugins/dokan-lite/includes/Order/VendorBalanceUpdateHandler.php on line 169
[30-Jun-2025 05:09:27 UTC] PHP Warning:  Trying to access array offset on null in /Users/kzaman/Herd/dokan/wp-content/plugins/dokan-lite/includes/Order/VendorBalanceUpdateHandler.php on line 170
[30-Jun-2025 05:09:27 UTC] PHP Warning:  Trying to access array offset on null in /Users/kzaman/Herd/dokan/wp-content/plugins/dokan-lite/includes/Order/VendorBalanceUpdateHandler.php on line 169
[30-Jun-2025 05:09:27 UTC] PHP Warning:  Trying to access array offset on null in /Users/kzaman/Herd/dokan/wp-content/plugins/dokan-lite/includes/Order/VendorBalanceUpdateHandler.php on line 170
[30-Jun-2025 05:09:27 UTC] PHP Warning:  Trying to access array offset on null in /Users/kzaman/Herd/dokan/wp-content/plugins/dokan-lite/includes/Order/VendorBalanceUpdateHandler.php on line 169
[30-Jun-2025 05:09:27 UTC] PHP Warning:  Trying to access array offset on null in /Users/kzaman/Herd/dokan/wp-content/plugins/dokan-lite/includes/Order/VendorBalanceUpdateHandler.php on line 170
[30-Jun-2025 05:09:27 UTC] PHP Warning:  Trying to access array offset on null in /Users/kzaman/Herd/dokan/wp-content/plugins/dokan-lite/includes/Order/VendorBalanceUpdateHandler.php on line 169
[30-Jun-2025 05:09:27 UTC] PHP Warning:  Trying to access array offset on null in /Users/kzaman/Herd/dokan/wp-content/plugins/dokan-lite/includes/Order/VendorBalanceUpdateHandler.php on line 170
[30-Jun-2025 05:09:27 UTC] PHP Warning:  Trying to access array offset on null in /Users/kzaman/Herd/dokan/wp-content/plugins/dokan-lite/includes/Order/VendorBalanceUpdateHandler.php on line 169
[30-Jun-2025 05:09:27 UTC] PHP Warning:  Trying to access array offset on null in /Users/kzaman/Herd/dokan/wp-content/plugins/dokan-lite/includes/Order/VendorBalanceUpdateHandler.php on line 170
[30-Jun-2025 05:09:27 UTC] PHP Warning:  Trying to access array offset on null in /Users/kzaman/Herd/dokan/wp-content/plugins/dokan-lite/includes/Order/VendorBalanceUpdateHandler.php on line 169
[30-Jun-2025 05:09:27 UTC] PHP Warning:  Trying to access array offset on null in /Users/kzaman/Herd/dokan/wp-content/plugins/dokan-lite/includes/Order/VendorBalanceUpdateHandler.php on line 170
[30-Jun-2025 05:09:27 UTC] PHP Warning:  Trying to access array offset on null in /Users/kzaman/Herd/dokan/wp-content/plugins/dokan-lite/includes/Order/VendorBalanceUpdateHandler.php on line 169
[30-Jun-2025 05:09:27 UTC] PHP Warning:  Trying to access array offset on null in /Users/kzaman/Herd/dokan/wp-content/plugins/dokan-lite/includes/Order/VendorBalanceUpdateHandler.php on line 170
[30-Jun-2025 05:40:26 UTC] PHP Warning:  Trying to access array offset on null in /Users/kzaman/Herd/dokan/wp-content/plugins/dokan-lite/includes/Order/VendorBalanceUpdateHandler.php on line 169
[30-Jun-2025 05:40:26 UTC] PHP Warning:  Trying to access array offset on null in /Users/kzaman/Herd/dokan/wp-content/plugins/dokan-lite/includes/Order/VendorBalanceUpdateHandler.php on line 170
[30-Jun-2025 05:40:26 UTC] PHP Warning:  Trying to access array offset on null in /Users/kzaman/Herd/dokan/wp-content/plugins/dokan-lite/includes/Order/VendorBalanceUpdateHandler.php on line 169
[30-Jun-2025 05:40:26 UTC] PHP Warning:  Trying to access array offset on null in /Users/kzaman/Herd/dokan/wp-content/plugins/dokan-lite/includes/Order/VendorBalanceUpdateHandler.php on line 170
[30-Jun-2025 05:40:26 UTC] PHP Warning:  Trying to access array offset on null in /Users/kzaman/Herd/dokan/wp-content/plugins/dokan-lite/includes/Order/VendorBalanceUpdateHandler.php on line 169
[30-Jun-2025 05:40:26 UTC] PHP Warning:  Trying to access array offset on null in /Users/kzaman/Herd/dokan/wp-content/plugins/dokan-lite/includes/Order/VendorBalanceUpdateHandler.php on line 170
[30-Jun-2025 05:40:26 UTC] PHP Warning:  Trying to access array offset on null in /Users/kzaman/Herd/dokan/wp-content/plugins/dokan-lite/includes/Order/VendorBalanceUpdateHandler.php on line 169
[30-Jun-2025 05:40:26 UTC] PHP Warning:  Trying to access array offset on null in /Users/kzaman/Herd/dokan/wp-content/plugins/dokan-lite/includes/Order/VendorBalanceUpdateHandler.php on line 170
[30-Jun-2025 05:40:26 UTC] PHP Warning:  Trying to access array offset on null in /Users/kzaman/Herd/dokan/wp-content/plugins/dokan-lite/includes/Order/VendorBalanceUpdateHandler.php on line 169
[30-Jun-2025 05:40:26 UTC] PHP Warning:  Trying to access array offset on null in /Users/kzaman/Herd/dokan/wp-content/plugins/dokan-lite/includes/Order/VendorBalanceUpdateHandler.php on line 170
[30-Jun-2025 05:40:26 UTC] PHP Warning:  Trying to access array offset on null in /Users/kzaman/Herd/dokan/wp-content/plugins/dokan-lite/includes/Order/VendorBalanceUpdateHandler.php on line 169
[30-Jun-2025 05:40:26 UTC] PHP Warning:  Trying to access array offset on null in /Users/kzaman/Herd/dokan/wp-content/plugins/dokan-lite/includes/Order/VendorBalanceUpdateHandler.php on line 170
[30-Jun-2025 05:40:26 UTC] PHP Warning:  Trying to access array offset on null in /Users/kzaman/Herd/dokan/wp-content/plugins/dokan-lite/includes/Order/VendorBalanceUpdateHandler.php on line 169
[30-Jun-2025 05:40:26 UTC] PHP Warning:  Trying to access array offset on null in /Users/kzaman/Herd/dokan/wp-content/plugins/dokan-lite/includes/Order/VendorBalanceUpdateHandler.php on line 170
[30-Jun-2025 05:40:26 UTC] PHP Warning:  Trying to access array offset on null in /Users/kzaman/Herd/dokan/wp-content/plugins/dokan-lite/includes/Order/VendorBalanceUpdateHandler.php on line 169
[30-Jun-2025 05:40:26 UTC] PHP Warning:  Trying to access array offset on null in /Users/kzaman/Herd/dokan/wp-content/plugins/dokan-lite/includes/Order/VendorBalanceUpdateHandler.php on line 170
[30-Jun-2025 05:40:26 UTC] PHP Warning:  Trying to access array offset on null in /Users/kzaman/Herd/dokan/wp-content/plugins/dokan-lite/includes/Order/VendorBalanceUpdateHandler.php on line 169
[30-Jun-2025 05:40:26 UTC] PHP Warning:  Trying to access array offset on null in /Users/kzaman/Herd/dokan/wp-content/plugins/dokan-lite/includes/Order/VendorBalanceUpdateHandler.php on line 170
[30-Jun-2025 05:40:26 UTC] PHP Warning:  Trying to access array offset on null in /Users/kzaman/Herd/dokan/wp-content/plugins/dokan-lite/includes/Order/VendorBalanceUpdateHandler.php on line 169
[30-Jun-2025 05:40:26 UTC] PHP Warning:  Trying to access array offset on null in /Users/kzaman/Herd/dokan/wp-content/plugins/dokan-lite/includes/Order/VendorBalanceUpdateHandler.php on line 170
[30-Jun-2025 06:21:37 UTC] PHP Warning:  Trying to access array offset on null in /Users/kzaman/Herd/dokan/wp-content/plugins/dokan-lite/includes/Order/VendorBalanceUpdateHandler.php on line 169
[30-Jun-2025 06:21:37 UTC] PHP Warning:  Trying to access array offset on null in /Users/kzaman/Herd/dokan/wp-content/plugins/dokan-lite/includes/Order/VendorBalanceUpdateHandler.php on line 170
[30-Jun-2025 06:25:16 UTC] PHP Warning:  Trying to access array offset on null in /Users/kzaman/Herd/dokan/wp-content/plugins/dokan-lite/includes/Order/VendorBalanceUpdateHandler.php on line 169
[30-Jun-2025 06:25:16 UTC] PHP Warning:  Trying to access array offset on null in /Users/kzaman/Herd/dokan/wp-content/plugins/dokan-lite/includes/Order/VendorBalanceUpdateHandler.php on line 170
[30-Jun-2025 06:25:40 UTC] Array
(
    [vendor_id] => 2
    [order_id] => 927
    [processing_fee] => 3.98
)
`
};

