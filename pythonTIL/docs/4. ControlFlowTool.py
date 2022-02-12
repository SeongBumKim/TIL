# 4.1 if문
x = int(input("enter an integer: "))
if x < 0 :
    x = 0
    print('Negative changed to zero')
elif x == 0:
    print('Zero')
elif x == 1:
    print('Single')
else : 
    print('More')


# 4.2 for문
words = ['cat', 'window', 'defenestrate']
for w in words:
    print(w, len(w))


# 4.3 range() 함수
for i in range(5):
    print(i)

print(list(range(5, 10)))
print(list(range(0, 10, 3)))
print(list(range(-10,-100,-30)))
a = ['Mary', 'had', 'a', 'little', 'lamb']
for i in range(len(a)):
    print(i, a[i])
print(range(10))
print(sum(range(4)))


# 4.4 break, contiue, else
for n in range(2,10):
    for x in range(2, n):
        if n % x == 0:
            print(n, 'equals', x, '*', n//x)
            break
    else: # for 문의 break
        print(n, 'is a prime number')

for num in range(2, 10):
    if num % 2 == 0:
        print("Found an even number", num)
        continue
    print("Found and odd number", num)


# 4.5 pass 문법 적으로 필요하지만 프로그램이 할일이 없을 때 사용
class myEmptyClass:
    pass


# 4.6 match 
def http_error(status):
    match status:
        case 400:
            return "Bad request"
        case 404:
            return "Not found"
        case 418: 
            return "I'm a teapot"
        case _:
            return "Somting's wrong with the internet"
        case 401 | 403 | 404:
            return "Not allowed"
        


# 4.7 Defining Functions
def fib(n):
    """Print a Fibonacci series up to n."""
    a, b = 0, 1
    while a < n:
        print(a, end = ' ')    
        a, b = b, a + b
fib(2000)

def fib2(n):
    """Return a list contiaing the Fibonacci series up to n."""
    result = []
    a, b = 0, 1
    while a < n:
        result.append(a)
        a, b = b, a + b
        return result
fib2(100) 


# 4.8 More on Defining Functions
def ask_ok(prompt, retries=4, reminder='Please try again'):
    while True:
        ok = input(prompt)
        if ok in ('y', 'ye', 'yes'):
            return True
        if ok in ('n','no', 'nop', 'nope'):
            return False
        retries = retries - 1
        if retries < 0:
            raise ValueError('invalid user response')
        print(reminder)
ask_ok('정말 끝내길 원하세요?')

i = 5
def f(arg=i):
    print(arg)
i = 6
f()

def f(a, L=[]):
    L.append(a)
    return L
print(f(1))
print(f(2))
print(f(3))

def f(a, L=None):
    if L is None:
        L=[]
    L.append(a)
    return L
print(f(1))
print(f(2))
print(f(3))


# 4.9 Coding Style
# 들여쓰기에 4-스페이스 사용
# 79자 넘지 않도록 줄 넘김
# 함수, 클래스, 함수 내의 큰 코드 블록 사이에 빈 줄을 넣어 분리
# 가능하다면 주석은 별도의 줄로
# 독스트링 사용
# 연산자들 주변과 콤마 뒤에 스페이스를 넣고, 괄호 바로 안쪽에는 스페이스를 넣지 마세요
# 클래스와 함수들에 일관성 있는 이름을 붙이세요, 관례는 UpperCamelCasem와 lowercase_with_underscores
# 첫 번째 메서드 인자의 이름으로는 항상 self를 사용
# 특별한 인코딩을 사용하지말 것
# 식별자에 ASCII 이외의 문자를 사용하지 말것 