const API_URL = "https://notificationservice.softpulseai.in/partner/public/website-lead";

interface LeadPayload {
  name: string;
  email: string | null;
  phone: string;
  message: string | null;
  campaign: string;
}

export async function submitLead(data: LeadPayload): Promise<{ success: boolean; error?: string }> {
  try {
    const payload = {
      client_id: 2,
      name: data.name || "null",
      email: data.email || "null",
      phone: data.phone || "null",
      message: data.message || "null",
      source: "website",
      campaign: data.campaign,
      page: window.location.href,
    };

    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) throw new Error(`Server error: ${res.status}`);
    return { success: true };
  } catch (e: any) {
    return { success: false, error: e.message || "Something went wrong" };
  }
}
