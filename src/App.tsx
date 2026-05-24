import { motion } from "motion/react";
import { Sparkles, Music, GraduationCap, Heart, Star, BookOpen, Award, Users } from "lucide-react";
import shreyanshiPhoto from "@/assets/shreyanshi.jpeg";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-hero overflow-hidden">
      {/* Nav */}
      <nav className="relative z-20 flex items-center justify-between px-6 md:px-16 py-6">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-gradient-primary shadow-glow" />
          <span className="font-display text-xl font-bold">Shreyanshi</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#about" className="hover:text-primary transition">About</a>
          <a href="#skills" className="hover:text-primary transition">Skills</a>
          <a href="#family" className="hover:text-primary transition">Family</a>
          <a href="#school" className="hover:text-primary transition">School</a>
        </div>
        <a href="#about" className="rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background hover:opacity-90 transition">
          Say Hello
        </a>
      </nav>

      {/* Hero */}
      <section className="relative px-6 md:px-16 pt-8 pb-32">
        <div className="grid md:grid-cols-12 gap-10 items-center max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7 space-y-7"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-4 py-2 shadow-soft">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-xs font-semibold tracking-wider uppercase">Hello World, I'm</span>
            </div>
            <h1 className="font-display text-6xl md:text-8xl font-bold leading-[0.95]">
              Shreyanshi <br />
              <span className="text-gradient-primary italic">Singh</span>
              <span className="font-script text-accent text-5xl md:text-6xl ml-3">✦</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              A Class 4 student with big dreams — I dance with joy, learn with curiosity,
              and even love teaching others what I know.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <span className="rounded-full bg-primary/10 text-primary px-4 py-2 text-sm font-semibold">🎭 Dancer</span>
              <span className="rounded-full bg-accent/30 text-accent-foreground px-4 py-2 text-sm font-semibold">📚 Student</span>
              <span className="rounded-full bg-secondary text-secondary-foreground px-4 py-2 text-sm font-semibold">✏️ Teacher</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="md:col-span-5 relative"
          >
            <div className="absolute -inset-6 bg-gradient-primary rounded-[3rem] blur-3xl opacity-30" />
            <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-glow border-4 border-card">
              <img src={shreyanshiPhoto} alt="Shreyanshi Singh" className="w-full h-full object-cover" />
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-card px-5 py-4 flex items-center gap-3"
            >
              <div className="h-10 w-10 rounded-full bg-gradient-accent flex items-center justify-center">
                <Heart className="h-5 w-5 text-white" fill="white" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Age</p>
                <p className="font-display font-bold">Class 4</p>
              </div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute -top-4 -right-4 bg-card rounded-2xl shadow-card px-5 py-4"
            >
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-accent" fill="currentColor" />
                <span className="font-script text-2xl text-primary">Star Performer</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 md:px-16 py-24 bg-card">
        <div className="max-w-5xl mx-auto">
          <p className="font-script text-3xl text-primary mb-2">about me</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 max-w-3xl">
            A little girl with a <span className="text-gradient-primary italic">big heart</span> and bigger dreams.
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-lg text-muted-foreground leading-relaxed">
            <p>
              Hi! My name is <span className="text-foreground font-semibold">Shreyanshi Singh</span> and I study
              in <span className="text-foreground font-semibold">Class 4 at Sona Modern Public School</span>. I love
              dancing more than anything — when music plays, my feet just can't stay still!
            </p>
            <p>
              When I'm not dancing or studying, I love teaching what I know to my friends and
              younger kids. I believe sharing knowledge is the most beautiful gift.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="px-6 md:px-16 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-script text-3xl text-primary">what i love</p>
            <h2 className="text-4xl md:text-5xl font-bold">My Superpowers</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Music, title: "Dancing", desc: "Classical, folk, freestyle — I love them all. Dance is how I tell my stories.", color: "bg-primary/10 text-primary" },
              { icon: GraduationCap, title: "Teaching", desc: "I love helping friends understand lessons and learn new things together.", color: "bg-accent/30 text-accent-foreground" },
              { icon: BookOpen, title: "Learning", desc: "Every day at school is a new adventure with books, friends and ideas.", color: "bg-secondary text-secondary-foreground" },
            ].map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-card rounded-3xl p-8 shadow-card hover:shadow-glow transition-all hover:-translate-y-2"
              >
                <div className={`h-14 w-14 rounded-2xl ${s.color} flex items-center justify-center mb-5`}>
                  <s.icon className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Family */}
      <section id="family" className="px-6 md:px-16 py-24 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-script text-3xl text-primary">my world</p>
            <h2 className="text-4xl md:text-5xl font-bold">My Family</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl p-10 bg-gradient-primary text-primary-foreground shadow-glow">
              <Award className="h-10 w-10 mb-4 opacity-80" />
              <h3 className="font-display text-3xl font-bold mb-2">My Father</h3>
              <p className="text-lg opacity-90">Branch Head — my hero who works hard every day and inspires me to dream big.</p>
            </div>
            <div className="rounded-3xl p-10 bg-accent text-accent-foreground shadow-soft">
              <Heart className="h-10 w-10 mb-4" fill="currentColor" />
              <h3 className="font-display text-3xl font-bold mb-2">My Mother</h3>
              <p className="text-lg opacity-90">Homemaker — the heart of our home, who fills our days with love and warmth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* School */}
      <section id="school" className="px-6 md:px-16 py-24">
        <div className="max-w-5xl mx-auto text-center">
          <Users className="h-12 w-12 text-primary mx-auto mb-6" />
          <p className="font-script text-3xl text-primary">where i learn</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient-primary italic">Sona Modern</span> Public School
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Currently shining in Class 4 — making memories, friends, and learning something new every single day.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-16 py-10 border-t border-border bg-card">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-script text-2xl text-primary">Made with ♥ by Shreyanshi</p>
          <p className="text-sm text-muted-foreground">© 2026 Shreyanshi Singh · Class 4 · Sona Modern Public School</p>
        </div>
      </footer>
    </div>
  );
}
