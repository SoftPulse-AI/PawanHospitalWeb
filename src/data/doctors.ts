export interface Doctor {
  name: string;
  graduation: string;
  postGraduation: string;
  specialization: string;
  department: string;
  initials: string;
}

export const doctors: Doctor[] = [
  { name: "Dr. Anil Kumar Dodeja", graduation: "MBBS", postGraduation: "MD", specialization: "Medicine", department: "General Medicine", initials: "AD" },
  { name: "Dr. Sonali", graduation: "MBBS", postGraduation: "DNB", specialization: "Surgery", department: "General Surgery", initials: "SN" },
  { name: "Dr. Chirag Sethi", graduation: "MBBS", postGraduation: "MS", specialization: "Orthopaedic", department: "Orthopedics", initials: "CS" },
  { name: "Dr. Swati Aagarwal", graduation: "MBBS", postGraduation: "MD", specialization: "Paediatrics", department: "Pediatrics", initials: "SA" },
  { name: "Dr. Sanjay Gopal", graduation: "MBBS", postGraduation: "DCH", specialization: "Paediatrics", department: "Pediatrics", initials: "SG" },
  { name: "Dr. Arpita Goen", graduation: "MBBS", postGraduation: "MS", specialization: "Obs & Gyne", department: "Obstetrics & Gynecology", initials: "AG" },
  { name: "Dr. Tanvi", graduation: "MBBS", postGraduation: "DNB", specialization: "Gastroenterology", department: "Gastroenterology", initials: "TN" },
  { name: "Dr. Satender Singh", graduation: "MBBS", postGraduation: "MD", specialization: "Radiology", department: "Radiology", initials: "SS" },
  { name: "Dr. Vishal Srivastava", graduation: "MBBS, BDS", postGraduation: "", specialization: "Dental", department: "Dental", initials: "VS" },
  { name: "Dr. Shubham Tyagi", graduation: "MBBS, BDS", postGraduation: "", specialization: "Dental", department: "Dental", initials: "ST" },
  { name: "Dr. Prashant Gupta", graduation: "MBBS", postGraduation: "MD", specialization: "Pathology", department: "Pathology", initials: "PG" },
  { name: "Dr. Sharad Mohan", graduation: "MBBS", postGraduation: "MS", specialization: "ENT", department: "ENT", initials: "SM" },
  { name: "Dr. Ratna Mala", graduation: "MBBS", postGraduation: "DNB", specialization: "Ophthalmology", department: "Ophthalmology", initials: "RM" },
  { name: "Dr. Neeraj Sharma", graduation: "MBBS", postGraduation: "MS, DNB", specialization: "Urology", department: "Urology", initials: "NS" },
  { name: "Dr. Anshul Sachdeva", graduation: "MBBS", postGraduation: "MS, DNB", specialization: "Anaesthesia", department: "Anaesthesia", initials: "AS" },
  { name: "Dr. Nadeem Akbar", graduation: "MBBS", postGraduation: "MD", specialization: "Respiratory Medicine", department: "Respiratory Medicine", initials: "NA" },
  { name: "Dr. Prateek Choudhary", graduation: "MBBS", postGraduation: "DM", specialization: "Cardiology", department: "Cardiology", initials: "PC" },
  { name: "Dr. Saurabh Chauhan", graduation: "MBBS", postGraduation: "MS", specialization: "Orthopaedic", department: "Orthopedics", initials: "SC" },
  { name: "Dr. Adhishwar", graduation: "MBBS", postGraduation: "MS", specialization: "Plastic Surgery", department: "Plastic Surgery", initials: "AW" },
  { name: "Dr. Rajesh Goel", graduation: "MBBS", postGraduation: "DNB", specialization: "Nephrology", department: "Nephrology", initials: "RG" },
  { name: "Dr. Vipin Gupta", graduation: "MBBS", postGraduation: "MCH", specialization: "Urology", department: "Urology", initials: "VG" },
  { name: "Dr. Arjit Arnav", graduation: "MBBS", postGraduation: "DNB", specialization: "Anaesthesia", department: "Anaesthesia", initials: "AA" },
  { name: "Dr. Sandeep Dahiya", graduation: "MBBS", postGraduation: "D.A", specialization: "Anaesthesia", department: "Anaesthesia", initials: "SD" },
  { name: "Dr. Ankit Jain", graduation: "MBBS", postGraduation: "MD", specialization: "Anaesthesia", department: "Anaesthesia", initials: "AJ" },
  { name: "Dr. Lalit Kumar", graduation: "MBBS", postGraduation: "MD", specialization: "Anaesthesia", department: "Anaesthesia", initials: "LK" },
  { name: "Dr. Naseeb Rahman", graduation: "MBBS", postGraduation: "MD", specialization: "Neurology", department: "Neurology", initials: "NR" },
  { name: "Dr. Tarun", graduation: "MBBS", postGraduation: "MS, MCH", specialization: "Neuro Surgery", department: "Neurosurgery", initials: "TR" },
  { name: "Dr. Sanchit Bhandari", graduation: "MBBS", postGraduation: "MD", specialization: "General Medicine", department: "General Medicine", initials: "SB" },
];

export const departments = [
  "General Medicine",
  "General Surgery",
  "Orthopedics",
  "Pediatrics",
  "Obstetrics & Gynecology",
  "Gastroenterology",
  "Radiology",
  "Dental",
  "Pathology",
  "ENT",
  "Ophthalmology",
  "Urology",
  "Anaesthesia",
  "Respiratory Medicine",
  "Cardiology",
  "Plastic Surgery",
  "Nephrology",
  "Neurology",
  "Neurosurgery",
];

export const PHONE_APPOINTMENT = "8510008079";
export const PHONE_MEDICAL = "9873003488";
export const PHONE_RECEPTION = "9999438079";
