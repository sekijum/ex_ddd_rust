struct Abc {
    dat1: i32,
}

trait Xyz {
    fn new(dat1: i32) -> Self;
    fn d1(&self) -> i32;
}

impl Xyz for Abc {
    fn new(dat1: i32) -> Abc {
        Abc { dat1: dat1 }
    }

    fn d1(&self) -> i32 {
        self.dat1
    }
}

fn d1(arg: &Abc) {
    println!("fn d1 = {}", arg.dat1);
}

fn main() {
    println!("Self, self");
    let test: Abc = Xyz::new(34);
    d1(&test);
    println!("test.d1={}", test.d1());
}
