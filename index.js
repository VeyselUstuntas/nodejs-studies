// PErson
function Person(name) {
    if (!(this instanceof Person)) {
        return new Person(name);
    }
    this.name = name;
};

Person.prototype.Introduce = function () {
    console.log("Personel Name: ", this.name);
};

// Teacher
function Teacher(name, branch) {
    if (!(this instanceof Teacher)) {
        return new Teacher(name, branch);
    }
    Person.call(this, name);
    this.branch = branch;

};

Teacher.prototype = Object.create(Person.prototype); // Person sınıfının prototype'ını Teacher üzerinden kullanmak için. 
Teacher.prototype.constructor = Teacher; // yukarda Teacher prototpye'ına Person atatığımız için consturctor da Person oldu bunu düzeltmek için
Teacher.prototype.teach = function () {
    console.log("I teach: ", this.branch);
};

// Headmaster 
function Headmaster(name, branch) {
    if (!(this instanceof Headmaster)) {
        return new Headmaster(name, branch);
    }
    Teacher.call(this, name, branch);
}
Headmaster.prototype = Object.create(Teacher.prototype); // Teacher sınıfının prototype'ını Headmaster üzerinden kullanmak için. 
Headmaster.prototype.constructor = Headmaster; // yukarda Headmaster prototpye'ına Techer atatığımız için consturctor da Teacher oldu bunu düzeltmek için 
Headmaster.prototype.shareTask = function () {
    console.log("ive already shared all the work");
};

// Student
function Student(name, number) {
    if (!(this instanceof Student)) {
        return new Student(name, number);
    }

    Person.call(this, name);
    this.number = number;
};
Student.prototype = Object.create(Person.prototype); // Person sınıfının prototype'ını Student üzerinden kullanmak için. 
Student.prototype.constructor = Student; // yukarda student prototpye'ına Person atatığımız için consturctor da Person oldu bunu düzeltmek için
Student.prototype.study = function () {
    console.log("My student number is ",this.number);
};

let p1 = Person("Çınar");
p1.Introduce();

let t1 = Teacher("Sadık", "Math");
t1.Introduce();
t1.teach();

let s1 = Student("Buğra",129);
s1.Introduce();
s1.study();

let h1 = Headmaster("Mehmet","Physics");
h1.Introduce();
h1.teach();
h1.shareTask();