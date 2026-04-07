import React, { useState } from 'react';
import { Trophy, Settings, LayoutGrid, Maximize, X, ArrowRight, PartyPopper } from 'lucide-react';

// --- CUSTOM QUIZ DATA (MUNICH / INDO-GERMAN / PRATIK THEME) ---
const quizData = {
  1: [
    {
      name: "Munich Mashup",
      questions: [
        { id: 'r1-c1-q1', points: 10, question: "What river flows through the heart of Munich?", answer: "The Isar", questionImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Isar_M%C3%BCnchen.jpg/800px-Isar_M%C3%BCnchen.jpg" },
        { id: 'r1-c1-q2', points: 20, question: "What is the English translation of the famous 'Viktualienmarkt'?", answer: "Victuals Market / Provisions Market (Food Market)", questionImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Viktualienmarkt_M%C3%BCnchen_-_Maibaum.jpg/800px-Viktualienmarkt_M%C3%BCnchen_-_Maibaum.jpg" },
        { id: 'r1-c1-q3', points: 30, question: "Which two S-Bahn lines connect the city center directly to Munich Airport?", answer: "S1 and S8", questionImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/S-Bahn-Logo.svg/500px-S-Bahn-Logo.svg.png" },
        { id: 'r1-c1-q4', points: 40, question: "What was the original reason for the very first Oktoberfest held in 1810?", answer: "A royal wedding celebration (Crown Prince Ludwig and Princess Therese)", questionImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Kronprinz_Ludwig_von_Bayern.jpg/400px-Kronprinz_Ludwig_von_Bayern.jpg" },
        { id: 'r1-c1-q5', points: 50, question: "In what exact year was the city of Munich officially founded?", answer: "1158", questionImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/M%C3%BCnchen_-_Heinrich_der_L%C3%B6we_am_Alten_Rathaus.jpg/400px-M%C3%BCnchen_-_Heinrich_der_L%C3%B6we_am_Alten_Rathaus.jpg" }
      ]
    },
    {
      name: "Desi-Deutsch Ties",
      questions: [
        { id: 'r1-c2-q1', points: 10, question: "Who is the current Chancellor of Germany?", answer: "Friedrich Merz", questionImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Friedrich_Merz_2024.jpg/400px-Friedrich_Merz_2024.jpg" },
        { id: 'r1-c2-q2', points: 20, question: "In Hindi we say 'Aloo'. What is the German word for it?", answer: "Kartoffel (Potato)", questionImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Patates.jpg/800px-Patates.jpg" },
        { id: 'r1-c2-q3', points: 30, question: "Which popular German board game, 'Mensch ärgere Dich nicht', is directly derived from the traditional Indian game Pachisi?", answer: "Ludo", questionImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Pachisi_board.jpg/600px-Pachisi_board.jpg" },
        { id: 'r1-c2-q4', points: 40, question: "Which famous 19th-century German Indologist has a network of Indian cultural institutes named after him, despite never visiting India?", answer: "Max Müller", questionImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Max_M%C3%BCller.jpg/400px-Max_M%C3%BCller.jpg" },
        { id: 'r1-c2-q5', points: 50, question: "Which German city hosts the largest Indian film festival outside of India (The Indian Film Festival)?", answer: "Stuttgart", questionImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Stuttgart_Schlossplatz_2016.jpg/800px-Stuttgart_Schlossplatz_2016.jpg" }
      ]
    },
    {
      name: "Pop Culture",
      questions: [
        { id: 'r1-c3-q1', points: 10, question: "What is the highest-grossing movie of all time globally?", answer: "Avatar", questionImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Pandora_-_The_World_of_Avatar_opening_celebration.jpg/800px-Pandora_-_The_World_of_Avatar_opening_celebration.jpg" },
        { id: 'r1-c3-q2', points: 20, question: "Which Indian actor is globally known as the 'King of Bollywood'?", answer: "Shah Rukh Khan (SRK)", questionImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Shah_Rukh_Khan_graces_the_launch_of_the_new_Santro.jpg/400px-Shah_Rukh_Khan_graces_the_launch_of_the_new_Santro.jpg" },
        { id: 'r1-c3-q3', points: 30, question: "In the hit German Netflix sci-fi show 'Dark', what is the name of the fictional town?", answer: "Winden", questionImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Kernkraftwerk_Grafenrheinfeld.jpg/800px-Kernkraftwerk_Grafenrheinfeld.jpg" },
        { id: 'r1-c3-q4', points: 40, question: "Which Indian movie recently won the Oscar for Best Original Song with 'Naatu Naatu'?", answer: "RRR", questionImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Oscars_logo.svg/500px-Oscars_logo.svg.png" },
        { id: 'r1-c3-q5', points: 50, question: "Who won the very first season of 'Deutschland sucht den Superstar' (German Idol) in 2003?", answer: "Alexander Klaws", questionImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Alexander_Klaws_2014.jpg/400px-Alexander_Klaws_2014.jpg" }
      ]
    },
    {
      name: "The Animal Kingdom",
      questions: [
        { id: 'r1-c4-q1', points: 10, question: "What is the fastest land animal?", answer: "The Cheetah", questionImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/The_Cheetahs_of_the_Mara_Region.jpg/800px-The_Cheetahs_of_the_Mara_Region.jpg" },
        { id: 'r1-c4-q2', points: 20, question: "Which dog breed is known as 'Dachshund' in German, which literally translates to 'badger dog'?", answer: "Wiener dog / Sausage dog", questionImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Short-haired-Dachshund.jpg/800px-Short-haired-Dachshund.jpg" },
        { id: 'r1-c4-q3', points: 30, question: "What marine animal is famous for having three hearts and blue blood?", answer: "The Octopus", questionImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Octopus_macropus_crop.jpg/800px-Octopus_macropus_crop.jpg" },
        { id: 'r1-c4-q4', points: 40, question: "Wombats are famous for having feces (poop) in what specific geometric shape?", answer: "Cube / Cubed", questionImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Vombatus_ursinus_-Maria_Island_National_Park.jpg/800px-Vombatus_ursinus_-Maria_Island_National_Park.jpg" },
        { id: 'r1-c4-q5', points: 50, question: "What is the name of the only known biological creature capable of reverting back to its juvenile polyp stage, making it effectively biologically immortal?", answer: "The Immortal Jellyfish (Turritopsis dohrnii)", questionImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Turritopsis_dohrnii.jpg/400px-Turritopsis_dohrnii.jpg" }
      ]
    },
    {
      name: "All About Pratik!",
      questions: [
        { id: 'r1-c5-q1', points: 10, question: "If Pratik had to eat one specific cuisine for the rest of his life, what would it be?", answer: "[Host to Judge!]" },
        { id: 'r1-c5-q2', points: 20, question: "What is Pratik's absolute go-to drink order at a Munich beer garden?", answer: "[Host to Judge!]" },
        { id: 'r1-c5-q3', points: 30, question: "What is a phrase, word, or catchphrase that Pratik says way too often?", answer: "[Host to Judge!]" },
        { id: 'r1-c5-q4', points: 40, question: "Name the exact hospital or neighborhood where Pratik was born.", answer: "[Host to Judge!]" },
        { id: 'r1-c5-q5', points: 50, question: "What is Pratik's most useless hidden talent?", answer: "[Host to Judge!]" }
      ]
    }
  ],
  2: [
    {
      name: "Geography Gurus",
      questions: [
        { id: 'r2-c1-q1', points: 10, question: "What is the capital city of Australia?", answer: "Canberra", questionImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Parliament_House_Canberra_aerial_view.jpg/800px-Parliament_House_Canberra_aerial_view.jpg" },
        { id: 'r2-c1-q2', points: 20, question: "Germany shares its land borders with how many different countries?", answer: "Nine (9)", questionImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Map_of_Germany_%28with_states%2C_surrounding_countries%29.svg/600px-Map_of_Germany_%28with_states%2C_surrounding_countries%29.svg.png" },
        { id: 'r2-c1-q3', points: 30, question: "Mount Zugspitze is the highest peak in Germany. What is the highest mountain peak in India?", answer: "Kangchenjunga", questionImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Kangchenjunga_from_Tiger_Hill.jpg/800px-Kangchenjunga_from_Tiger_Hill.jpg" },
        { id: 'r2-c1-q4', points: 40, question: "Which Indian state has the longest coastline?", answer: "Gujarat", questionImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/India_Gujarat_locator_map.svg/500px-India_Gujarat_locator_map.svg.png" },
        { id: 'r2-c1-q5', points: 50, question: "What is the only country in the world that does not have a rectangular or square national flag?", answer: "Nepal", questionImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg/800px-Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg" }
      ]
    },
    {
      name: "History Mysteries",
      questions: [
        { id: 'r2-c2-q1', points: 10, question: "Who was the first person to step onto the moon?", answer: "Neil Armstrong", questionImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Neil_Armstrong_pose.jpg/400px-Neil_Armstrong_pose.jpg" },
        { id: 'r2-c2-q2', points: 20, question: "In what year did the Berlin Wall officially fall?", answer: "1989", questionImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Berlinermauer.jpg/800px-Berlinermauer.jpg" },
        { id: 'r2-c2-q3', points: 30, question: "What was the name of the first artificial Earth satellite launched by the Soviet Union in 1957?", answer: "Sputnik (1)", questionImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Sputnik_asm.jpg/500px-Sputnik_asm.jpg" },
        { id: 'r2-c2-q4', points: 40, question: "Who was the last Emperor (Kaiser) of the German Empire, ruling until 1918?", answer: "Wilhelm II", questionImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Wilhelm_II_of_Germany_in_1913.jpg/400px-Wilhelm_II_of_Germany_in_1913.jpg" },
        { id: 'r2-c2-q5', points: 50, question: "Which ancient civilization built the city of Machu Picchu?", answer: "The Incas", questionImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Machu_Picchu%2C_Peru.jpg/800px-Machu_Picchu%2C_Peru.jpg" }
      ]
    },
    {
      name: "Lost in Translation",
      questions: [
        { id: 'r2-c3-q1', points: 10, question: "The German word 'Kindergarten' literally translates to English as what?", answer: "Children's Garden", questionImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Kindergarten_play.jpg/800px-Kindergarten_play.jpg" },
        { id: 'r2-c3-q2', points: 20, question: "The German word 'Krankenhaus' literally translates to English as what?", answer: "Sick House (Hospital)", questionImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/St._Thomas%27_Hospital_-_geograph.org.uk_-_1068868.jpg/800px-St._Thomas%27_Hospital_-_geograph.org.uk_-_1068868.jpg" },
        { id: 'r2-c3-q3', points: 30, question: "The German word 'Schildkröte' literally translates to English as what?", answer: "Shield Toad (Turtle)", questionImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Florida_Box_Turtle_Dig_NPS.jpg/800px-Florida_Box_Turtle_Dig_NPS.jpg" },
        { id: 'r2-c3-q4', points: 40, question: "The German word 'Glühbirne' literally translates to English as what?", answer: "Glowing Pear (Lightbulb)", questionImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Gluehlampe_01_KMJ.jpg/400px-Gluehlampe_01_KMJ.jpg" },
        { id: 'r2-c3-q5', points: 50, question: "The German word 'Treppenwitz' literally translates to English as what?", answer: "Staircase Joke (A clever comeback you think of too late)", questionImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Spiral_stairs_to_the_roof_of_the_tour_Saint-Jacques.jpg/400px-Spiral_stairs_to_the_roof_of_the_tour_Saint-Jacques.jpg" }
      ]
    },
    {
      name: "Foodie Frenzy",
      questions: [
        { id: 'r2-c4-q1', points: 10, question: "What is the main green ingredient in guacamole?", answer: "Avocado", questionImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Avocados_in_a_bowl.jpg/800px-Avocados_in_a_bowl.jpg" },
        { id: 'r2-c4-q2', points: 20, question: "'Currywurst' is a legendary German street food. What meat is the sausage typically made of?", answer: "Pork", questionImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Currywurst_mit_Pommes.jpg/800px-Currywurst_mit_Pommes.jpg" },
        { id: 'r2-c4-q3', points: 30, question: "What popular Indian street food consists of a hollow, crispy puri filled with flavored spicy water?", answer: "Pani Puri / Golgappa", questionImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Panipuri_-_Kolkata_2011-01-20_0863.JPG/800px-Panipuri_-_Kolkata_2011-01-20_0863.JPG" },
        { id: 'r2-c4-q4', points: 40, question: "'Spätzle' is a famous dish from southern Germany. What exactly is it?", answer: "A type of egg noodle / soft pasta", questionImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Kaesespaetzle_schuessel.jpg/800px-Kaesespaetzle_schuessel.jpg" },
        { id: 'r2-c4-q5', points: 50, question: "What is the most expensive spice in the world by weight?", answer: "Saffron", questionImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Saffron_Crop.JPG/800px-Saffron_Crop.JPG" }
      ]
    },
    {
      name: "Munich Survival Guide",
      questions: [
        { id: 'r2-c5-q1', points: 10, question: "What does the common Bavarian greeting 'Servus' mean?", answer: "Hello / Goodbye", questionImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Brezel_mit_Salz.jpg/600px-Brezel_mit_Salz.jpg" },
        { id: 'r2-c5-q2', points: 20, question: "On what day of the week are almost all supermarkets famously closed in Germany?", answer: "Sunday", questionImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Closed_sign_in_shop_window.jpg/800px-Closed_sign_in_shop_window.jpg" },
        { id: 'r2-c5-q3', points: 30, question: "If you order a 'Spezi' at a Munich restaurant, what two sodas are mixed together in your glass?", answer: "Cola and Orange Soda (Fanta)", questionImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Paulaner_Spezi_%280%2C5l_Flasche_und_gefuelltes_Glas%29.jpg/600px-Paulaner_Spezi_%280%2C5l_Flasche_und_gefuelltes_Glas%29.jpg" },
        { id: 'r2-c5-q4', points: 40, question: "What is the name of the river wave in the Englischer Garten where people famously surf year-round?", answer: "The Eisbachwelle / Eisbach", questionImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Eisbach_Surfer_M%C3%BCnchen.jpg/800px-Eisbach_Surfer_M%C3%BCnchen.jpg" },
        { id: 'r2-c5-q5', points: 50, question: "How many official Munich breweries are allowed to serve beer at the Oktoberfest?", answer: "Six (6)", questionImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Oktoberfest_2012_014.jpg/800px-Oktoberfest_2012_014.jpg" }
      ]
    }
  ]
};

export default function App() {
  const [quizState, setQuizState] = useState(quizData);
  const [activeTab, setActiveTab] = useState('board'); // 'board', 'admin', 'leaderboard'
  const [currentRound, setCurrentRound] = useState(1);
  const [players, setPlayers] = useState([
    { id: 1, name: 'Team / Player 1', score: 0 },
    { id: 2, name: 'Team / Player 2', score: 0 },
    { id: 3, name: 'Team / Player 3', score: 0 },
    { id: 4, name: 'Team / Player 4', score: 0 }
  ]);
  const [asked, setAsked] = useState(new Set());
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [questionStep, setQuestionStep] = useState('question'); // 'question', 'answer', 'scoring'
  const [customPoints, setCustomPoints] = useState({ 1: '', 2: '', 3: '', 4: '' });
  
  // --- MODAL STATE ---
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [alertMessage, setAlertMessage] = useState(null);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.log(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  // --- ADMIN EDITOR STATE ---
  const [editRound, setEditRound] = useState(1);
  const [editCatIndex, setEditCatIndex] = useState(0);
  const [editQIndex, setEditQIndex] = useState(0);
  const [editForm, setEditForm] = useState({ question: '', questionImage: '', answer: '', answerImage: '' });

  React.useEffect(() => {
    const q = quizState[editRound][editCatIndex].questions[editQIndex];
    setEditForm({
      question: q.question,
      questionImage: q.questionImage || '',
      answer: q.answer,
      answerImage: q.answerImage || ''
    });
  }, [quizState, editRound, editCatIndex, editQIndex]);

  const saveQuestionEdit = () => {
    setQuizState(prevState => {
      const newState = JSON.parse(JSON.stringify(prevState));
      const q = newState[editRound][editCatIndex].questions[editQIndex];
      q.question = editForm.question;
      q.questionImage = editForm.questionImage;
      q.answer = editForm.answer;
      q.answerImage = editForm.answerImage;
      return newState;
    });
    const btn = document.getElementById('save-btn');
    if(btn) { btn.innerText = "Saved!"; setTimeout(() => btn.innerText = "Save Updates to Board", 1500); }
  };

  const handleImageUpload = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = (event) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const MAX_WIDTH = 1920;
          const MAX_HEIGHT = 1080;
          let width = img.width;
          let height = img.height;

          if (width > height) {
            if (width > MAX_WIDTH) { height *= MAX_WIDTH / width; width = MAX_WIDTH; }
          } else {
            if (height > MAX_HEIGHT) { width *= MAX_HEIGHT / height; height = MAX_HEIGHT; }
          }

          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);
          const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.8);
          setEditForm(prev => ({ ...prev, [field]: compressedDataUrl }));
        };
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  const exportConfig = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(quizState));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "qwiz_config.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  const importConfig = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const importedState = JSON.parse(event.target.result);
        if (importedState[1] && importedState[2]) {
          setQuizState(importedState);
          setAlertMessage("Qwiz data imported successfully!");
        } else {
          setAlertMessage("Invalid configuration file format.");
        }
      } catch (err) {
        setAlertMessage("Error parsing the configuration file.");
      }
    };
    reader.readAsText(file);
    e.target.value = null; 
  };

  // --- GAME LOGIC ---
  const openQuestion = (q) => {
    setActiveQuestion(q);
    setQuestionStep('question');
  };

  const closeQuestion = () => {
    if (activeQuestion) {
      setAsked(prevAsked => new Set(prevAsked).add(activeQuestion.id));
    }
    setActiveQuestion(null);
    setQuestionStep('question');
  };

  const handleTeamAnswer = (playerId) => {
    if (activeQuestion) {
      updateScore(playerId, activeQuestion.points);
    }
    closeQuestion();
  };

  const updatePlayerName = (id, newName) => {
    setPlayers(prev => prev.map(p => p.id === id ? { ...p, name: newName } : p));
  };

  const updateScore = (id, amount) => {
    setPlayers(prev => prev.map(p => p.id === id ? { ...p, score: p.score + amount } : p));
  };

  const handleCustomPointUpdate = (id, isAdd) => {
    const pts = parseInt(customPoints[id]) || 0;
    if (pts > 0) {
      updateScore(id, isAdd ? pts : -pts);
      setCustomPoints(prev => ({ ...prev, [id]: '' }));
    }
  };

  const confirmReset = () => {
    setAsked(new Set());
    setPlayers(prev => prev.map(p => ({ ...p, score: 0 })));
    setCurrentRound(1);
    setActiveTab('board');
    setShowResetConfirm(false);
  };

  // --- RENDERERS ---
  const renderBoard = () => (
    <div className="w-full max-w-7xl mx-auto p-8 relative z-10">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-black text-fuchsia-500 uppercase tracking-widest drop-shadow-[0_0_15px_rgba(217,70,239,0.5)] flex items-center gap-3">
          Round {currentRound}
        </h2>
        <div className="flex gap-4">
          <button 
            onClick={() => setCurrentRound(1)} 
            className={`px-5 py-2.5 rounded-lg font-black transition-all border-2 ${currentRound === 1 ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.6)]' : 'bg-slate-900 text-slate-400 border-slate-700 hover:text-cyan-400 hover:border-cyan-800'}`}
          >
            ROUND 1
          </button>
          <button 
            onClick={() => setCurrentRound(2)} 
            className={`px-5 py-2.5 rounded-lg font-black transition-all border-2 ${currentRound === 2 ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.6)]' : 'bg-slate-900 text-slate-400 border-slate-700 hover:text-cyan-400 hover:border-cyan-800'}`}
          >
            ROUND 2
          </button>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-4 md:gap-6">
        {quizState[currentRound].map((cat, i) => (
          <div key={i} className="flex flex-col gap-3">
            <div className="bg-fuchsia-950/80 border border-fuchsia-500 text-fuchsia-200 font-bold p-4 text-center rounded-xl shadow-[0_0_10px_rgba(217,70,239,0.2)] h-28 flex items-center justify-center uppercase tracking-wider text-sm lg:text-base leading-tight backdrop-blur-sm">
              {cat.name}
            </div>
            {cat.questions.map(q => {
              const isAsked = asked.has(q.id);
              return (
                <button
                  key={q.id}
                  disabled={isAsked}
                  onClick={() => openQuestion(q)}
                  className={`h-24 text-4xl font-black rounded-xl transition-all duration-300 transform
                    ${isAsked 
                      ? 'bg-slate-900/30 border border-dashed border-slate-700/50 text-slate-800 cursor-default' 
                      : 'bg-slate-900 border-b-4 border-cyan-600 text-cyan-400 hover:bg-slate-800 hover:text-cyan-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] active:translate-y-0 active:border-b-0 mt-1 mb-[-1px]'
                    }`}
                >
                  {isAsked ? '' : q.points}
                </button>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  );

  const renderAdmin = () => (
    <div className="w-full max-w-5xl mx-auto p-8 relative z-10">
      <div className="bg-slate-900/90 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-slate-700">
        <h2 className="text-3xl font-black text-cyan-400 mb-8 flex items-center gap-3">
          <Settings className="text-fuchsia-500" size={32} />
          Host Dashboard
        </h2>
        
        <p className="text-slate-400 mb-8">
          Update team names and manage points secretly here.
        </p>

        <div className="space-y-6">
          {players.map(p => (
            <div key={p.id} className="bg-slate-950 p-6 rounded-xl flex flex-wrap items-center justify-between gap-4 border border-slate-800">
              <div className="flex items-center gap-4 flex-grow">
                <input 
                  value={p.name} 
                  onChange={(e) => updatePlayerName(p.id, e.target.value)}
                  className="bg-slate-900 text-cyan-100 px-4 py-2 rounded-lg border border-slate-700 focus:border-cyan-500 focus:outline-none text-xl font-bold w-64 shadow-inner"
                />
              </div>
              
              <div className="text-4xl font-black text-fuchsia-500 w-32 text-center drop-shadow-[0_0_8px_rgba(217,70,239,0.4)]">
                {p.score}
              </div>

              <div className="flex items-center gap-2">
                <button onClick={() => updateScore(p.id, 10)} className="px-3 py-2 bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/40 rounded-lg font-bold transition-colors">+10</button>
                <button onClick={() => updateScore(p.id, 20)} className="px-3 py-2 bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/40 rounded-lg font-bold transition-colors">+20</button>
                <button onClick={() => updateScore(p.id, -10)} className="px-3 py-2 bg-rose-500/20 text-rose-400 hover:bg-rose-500/40 rounded-lg font-bold transition-colors">-10</button>
                
                <div className="h-8 w-px bg-slate-700 mx-2"></div>
                
                <input 
                  type="number" 
                  value={customPoints[p.id]}
                  onChange={(e) => setCustomPoints({...customPoints, [p.id]: e.target.value})}
                  placeholder="Pts" 
                  className="bg-slate-900 text-cyan-100 px-3 py-2 rounded-lg border border-slate-700 w-20 text-center"
                />
                <button onClick={() => handleCustomPointUpdate(p.id, true)} className="px-3 py-2 bg-cyan-600 text-white hover:bg-cyan-500 rounded-lg font-bold">+</button>
                <button onClick={() => handleCustomPointUpdate(p.id, false)} className="px-3 py-2 bg-slate-700 text-slate-300 hover:bg-slate-600 rounded-lg font-bold">-</button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-700">
           <button onClick={() => setShowResetConfirm(true)} className="px-6 py-3 bg-rose-950/50 text-rose-500 hover:bg-rose-900/80 border border-rose-800 rounded-lg font-bold transition-colors">
             Reset Entire Qwiz
           </button>
        </div>
      </div>
    </div>
  );

  const renderLeaderboard = () => {
    const sortedPlayers = [...players].sort((a, b) => b.score - a.score);
    return (
      <div className="w-full max-w-5xl mx-auto p-8 flex flex-col items-center relative z-10">
        <h2 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 mb-16 flex items-center gap-4 drop-shadow-[0_0_20px_rgba(251,191,36,0.5)]">
          <Trophy className="text-yellow-400" size={56} />
          LEADERBOARD
          <Trophy className="text-yellow-400" size={56} />
        </h2>

        <div className="w-full space-y-6">
          {sortedPlayers.map((p, index) => (
            <div 
              key={p.id} 
              className={`flex items-center justify-between p-6 rounded-2xl border transform transition-all duration-500 
                ${index === 0 ? 'bg-amber-950/80 border-amber-500 scale-105 shadow-[0_0_30px_rgba(245,158,11,0.3)] z-10' : 
                  index === 1 ? 'bg-slate-800/80 border-slate-400 shadow-[0_0_15px_rgba(148,163,184,0.1)]' : 
                  index === 2 ? 'bg-orange-950/60 border-orange-700/50' : 
                  'bg-slate-900/60 border-slate-800'}
              `}
            >
              <div className="flex items-center gap-6">
                <div className={`text-4xl font-black ${index === 0 ? 'text-amber-400' : index === 1 ? 'text-slate-300' : index === 2 ? 'text-orange-500' : 'text-slate-600'}`}>
                  #{index + 1}
                </div>
                <div className="text-3xl font-bold text-white tracking-wide">
                  {p.name}
                </div>
              </div>
              <div className={`text-5xl font-black drop-shadow-md ${index === 0 ? 'text-amber-400' : 'text-cyan-400'}`}>
                {p.score} <span className="text-2xl text-slate-500 font-bold">pts</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-fuchsia-500/30 relative overflow-x-hidden">
      
      {/* BACKGROUND WATERMARK */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <PartyPopper className="text-white opacity-[0.02] w-[90vw] h-[90vw] -rotate-12" />
      </div>

      {/* HEADER / NAVIGATION */}
      <header className="bg-slate-950/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-black tracking-tighter flex items-center gap-2">
            <span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">QWIZ</span> 
            <span className="text-fuchsia-500 drop-shadow-[0_0_10px_rgba(217,70,239,0.5)]">PARTY</span> 🎂
          </h1>
          
          <div className="flex gap-2 p-1 bg-slate-900 rounded-xl border border-slate-800">
            <button 
              onClick={toggleFullScreen}
              className="flex items-center gap-2 px-3 py-2.5 rounded-lg font-bold text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-all"
              title="Toggle Full Screen"
            >
              <Maximize size={18} />
            </button>
            <button 
              onClick={() => setActiveTab('board')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg font-bold text-sm transition-all ${activeTab === 'board' ? 'bg-cyan-500 text-slate-950 shadow-[0_0_10px_rgba(34,211,238,0.3)]' : 'text-slate-400 hover:text-cyan-400 hover:bg-slate-800'}`}
            >
              <LayoutGrid size={18} /> Board
            </button>
            <button 
              onClick={() => setActiveTab('admin')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg font-bold text-sm transition-all ${activeTab === 'admin' ? 'bg-fuchsia-500 text-white shadow-[0_0_10px_rgba(217,70,239,0.3)]' : 'text-slate-400 hover:text-fuchsia-400 hover:bg-slate-800'}`}
            >
              <Settings size={18} /> Admin
            </button>
            <button 
              onClick={() => setActiveTab('leaderboard')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg font-bold text-sm transition-all ${activeTab === 'leaderboard' ? 'bg-amber-500 text-slate-950 shadow-[0_0_10px_rgba(245,158,11,0.3)]' : 'text-slate-400 hover:text-amber-400 hover:bg-slate-800'}`}
            >
              <Trophy size={18} /> Leaderboard
            </button>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="min-h-[calc(100vh-80px)] flex flex-col justify-center py-8">
        {activeTab === 'board' && renderBoard()}
        {activeTab === 'admin' && renderAdmin()}
        {activeTab === 'leaderboard' && renderLeaderboard()}
      </main>

      {/* FULL SCREEN QUESTION OVERLAY */}
      {activeQuestion && (
        <div className="fixed inset-0 bg-slate-950/95 backdrop-blur-xl z-50 flex flex-col">
          
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <PartyPopper className="text-cyan-400 opacity-[0.03] w-[100vw] h-[100vw] rotate-12" />
          </div>

          {/* Question Header */}
          <div className="flex justify-between items-center p-6 border-b border-slate-800 bg-slate-900/50 relative z-10">
             <div className="text-xl font-black text-slate-950 bg-cyan-400 px-5 py-2 rounded-lg shadow-[0_0_15px_rgba(34,211,238,0.5)] tracking-wider">
               {activeQuestion.points} POINTS
             </div>
             <button 
               onClick={closeQuestion}
               className="flex items-center gap-2 px-5 py-2.5 bg-slate-800 text-slate-300 hover:bg-rose-500 hover:text-white rounded-lg font-bold transition-all shadow-lg"
             >
               <X size={20} /> Close & Mark Asked
             </button>
          </div>

          {/* Question / Answer Content */}
          <div className="flex-grow flex flex-col items-center justify-start p-12 overflow-y-auto w-full relative z-10">
            <div className="my-auto flex flex-col items-center w-full gap-12">
              <div className={`transition-all duration-700 max-w-6xl w-full text-center flex flex-col items-center gap-8 ${(questionStep === 'answer' || questionStep === 'scoring') ? 'translate-y-[-15vh]' : ''}`}>
                {activeQuestion.questionImage && (
                  <img src={activeQuestion.questionImage} alt="Question" onError={(e) => e.target.style.display='none'} className="max-h-[40vh] object-contain rounded-2xl shadow-[0_0_30px_rgba(34,211,238,0.2)] border-2 border-slate-800" />
                )}
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight whitespace-pre-wrap drop-shadow-2xl">
                  {activeQuestion.question}
                </h2>
              </div>

              {(questionStep === 'answer' || questionStep === 'scoring') && (
                <div className="animate-in fade-in slide-in-from-bottom-10 duration-700 max-w-5xl w-full text-center bg-slate-900/90 backdrop-blur-md p-10 rounded-3xl border border-fuchsia-500 shadow-[0_0_40px_rgba(217,70,239,0.3)] flex flex-col items-center gap-8">
                  <h3 className="text-xl text-slate-950 font-black uppercase tracking-widest bg-fuchsia-500 px-8 py-2 rounded-full shadow-[0_0_15px_rgba(217,70,239,0.5)]">Answer</h3>
                  {activeQuestion.answerImage && (
                    <img src={activeQuestion.answerImage} alt="Answer" onError={(e) => e.target.style.display='none'} className="max-h-[30vh] object-contain rounded-xl shadow-lg border border-slate-700" />
                  )}
                  <p className="text-4xl md:text-5xl font-bold text-fuchsia-50 whitespace-pre-wrap">
                    {activeQuestion.answer}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Bottom Controls */}
          <div className="p-8 flex flex-col items-center bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent gap-6 relative z-10 pb-12">
            {questionStep === 'question' && (
              <button 
                onClick={() => setQuestionStep('answer')}
                className="group flex items-center gap-3 px-10 py-5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-2xl font-black uppercase tracking-wider rounded-2xl shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-all hover:scale-105"
              >
                Reveal Answer <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            )}

            {questionStep === 'answer' && (
              <button 
                onClick={() => setQuestionStep('scoring')}
                className="group flex items-center gap-3 px-10 py-5 bg-fuchsia-500 hover:bg-fuchsia-400 text-slate-950 text-2xl font-black uppercase tracking-wider rounded-2xl shadow-[0_0_25px_rgba(217,70,239,0.4)] transition-all hover:scale-105"
              >
                Proceed to Scoring <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            )}

            {questionStep === 'scoring' && (
              <div className="flex flex-col items-center gap-6 w-full max-w-6xl bg-slate-900/95 p-8 rounded-3xl border border-slate-700 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
                <span className="text-cyan-400 font-black tracking-widest uppercase text-sm">Award Points To...</span>
                <div className="flex flex-wrap justify-center gap-4">
                  {players.map(p => (
                    <button 
                      key={p.id}
                      onClick={() => handleTeamAnswer(p.id)}
                      className="px-8 py-4 bg-slate-800 text-cyan-300 border border-slate-700 hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-400 rounded-xl font-black transition-all text-xl shadow-lg hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                    >
                      {p.name} (+{activeQuestion.points})
                    </button>
                  ))}
                  <button 
                    onClick={closeQuestion}
                    className="px-8 py-4 bg-slate-900 text-slate-500 border border-slate-800 hover:bg-slate-800 hover:text-slate-300 rounded-xl font-bold transition-all text-xl"
                  >
                    Nobody got it
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* CUSTOM MODALS */}
      {showResetConfirm && (
        <div className="fixed inset-0 bg-slate-950/90 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-rose-500/50 p-8 rounded-2xl shadow-[0_0_30px_rgba(225,29,72,0.3)] max-w-md w-full text-center animate-in zoom-in-95 duration-200">
            <h3 className="text-2xl font-black text-rose-500 mb-4">RESET QWIZ?</h3>
            <p className="text-slate-300 mb-8">Are you sure you want to reset the entire game? All scores and board progress will be lost permanently.</p>
            <div className="flex gap-4 justify-center">
              <button onClick={() => setShowResetConfirm(false)} className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold rounded-lg transition-colors flex-1">Cancel</button>
              <button onClick={confirmReset} className="px-6 py-3 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-lg transition-colors flex-1 shadow-[0_0_15px_rgba(225,29,72,0.4)]">Yes, Reset</button>
            </div>
          </div>
        </div>
      )}

      {alertMessage && (
        <div className="fixed inset-0 bg-slate-950/90 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-cyan-500/50 p-8 rounded-2xl shadow-[0_0_30px_rgba(34,211,238,0.3)] max-w-sm w-full text-center animate-in zoom-in-95 duration-200">
            <p className="text-xl font-bold text-cyan-400 mb-8">{alertMessage}</p>
            <button onClick={() => setAlertMessage(null)} className="px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-black rounded-lg transition-colors shadow-[0_0_15px_rgba(34,211,238,0.4)]">OK</button>
          </div>
        </div>
      )}
    </div>
  );
}
