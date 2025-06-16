export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      admin_users: {
        Row: {
          created_at: string
          email: string
          full_name: string
          id: string
          is_active: boolean
          last_login: string | null
          password_hash: string
          role: Database["public"]["Enums"]["admin_role"]
          updated_at: string
        }
        Insert: {
          created_at?: string
          email: string
          full_name?: string
          id?: string
          is_active?: boolean
          last_login?: string | null
          password_hash: string
          role?: Database["public"]["Enums"]["admin_role"]
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string
          full_name?: string
          id?: string
          is_active?: boolean
          last_login?: string | null
          password_hash?: string
          role?: Database["public"]["Enums"]["admin_role"]
          updated_at?: string
        }
        Relationships: []
      }
      air_quality: {
        Row: {
          aqi: number
          co: number | null
          created_at: string
          id: string
          location: string
          no2: number | null
          o3: number | null
          pm10: number | null
          pm25: number | null
          so2: number | null
          status: string
          updated_at: string
        }
        Insert: {
          aqi: number
          co?: number | null
          created_at?: string
          id?: string
          location: string
          no2?: number | null
          o3?: number | null
          pm10?: number | null
          pm25?: number | null
          so2?: number | null
          status: string
          updated_at?: string
        }
        Update: {
          aqi?: number
          co?: number | null
          created_at?: string
          id?: string
          location?: string
          no2?: number | null
          o3?: number | null
          pm10?: number | null
          pm25?: number | null
          so2?: number | null
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      careers: {
        Row: {
          application_deadline: string | null
          category: string
          color: string
          created_at: string
          created_by: string | null
          description: string
          display_order: number
          employment_type: string
          excerpt: string
          icon_name: string
          id: string
          image_url: string
          link_path: string
          location: string | null
          requirements: string | null
          salary_range: string | null
          status: string
          title: string
          updated_at: string
        }
        Insert: {
          application_deadline?: string | null
          category: string
          color?: string
          created_at?: string
          created_by?: string | null
          description: string
          display_order?: number
          employment_type?: string
          excerpt: string
          icon_name?: string
          id?: string
          image_url: string
          link_path: string
          location?: string | null
          requirements?: string | null
          salary_range?: string | null
          status?: string
          title: string
          updated_at?: string
        }
        Update: {
          application_deadline?: string | null
          category?: string
          color?: string
          created_at?: string
          created_by?: string | null
          description?: string
          display_order?: number
          employment_type?: string
          excerpt?: string
          icon_name?: string
          id?: string
          image_url?: string
          link_path?: string
          location?: string | null
          requirements?: string | null
          salary_range?: string | null
          status?: string
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "careers_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "admin_users"
            referencedColumns: ["id"]
          },
        ]
      }
      content: {
        Row: {
          category: string | null
          content: string
          created_at: string
          created_by: string | null
          featured: boolean | null
          id: string
          published_at: string | null
          status: string
          title: string
          type: string
          updated_at: string
        }
        Insert: {
          category?: string | null
          content: string
          created_at?: string
          created_by?: string | null
          featured?: boolean | null
          id?: string
          published_at?: string | null
          status?: string
          title: string
          type: string
          updated_at?: string
        }
        Update: {
          category?: string | null
          content?: string
          created_at?: string
          created_by?: string | null
          featured?: boolean | null
          id?: string
          published_at?: string | null
          status?: string
          title?: string
          type?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "content_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "admin_users"
            referencedColumns: ["id"]
          },
        ]
      }
      five_million_trees_applications: {
        Row: {
          address: string
          contact_email: string
          contact_name: string
          contact_phone: string
          contact_position: string
          coordinator_commitment: boolean
          created_at: string
          date_established: string
          id: string
          locations: string
          organization_name: string
          organization_type: string
          other_type: string | null
          planting_sites: number
          previous_experience: string | null
          representative_name: string
          representative_position: string
          seedlings_requested: number
          status: string
          submission_date: string
          survival_rate_commitment: string
          tracking_tool_commitment: boolean
          training_commitment: boolean
          updated_at: string
          volunteers: number
        }
        Insert: {
          address: string
          contact_email: string
          contact_name: string
          contact_phone: string
          contact_position: string
          coordinator_commitment?: boolean
          created_at?: string
          date_established: string
          id?: string
          locations: string
          organization_name: string
          organization_type: string
          other_type?: string | null
          planting_sites: number
          previous_experience?: string | null
          representative_name: string
          representative_position: string
          seedlings_requested: number
          status?: string
          submission_date?: string
          survival_rate_commitment: string
          tracking_tool_commitment?: boolean
          training_commitment?: boolean
          updated_at?: string
          volunteers: number
        }
        Update: {
          address?: string
          contact_email?: string
          contact_name?: string
          contact_phone?: string
          contact_position?: string
          coordinator_commitment?: boolean
          created_at?: string
          date_established?: string
          id?: string
          locations?: string
          organization_name?: string
          organization_type?: string
          other_type?: string | null
          planting_sites?: number
          previous_experience?: string | null
          representative_name?: string
          representative_position?: string
          seedlings_requested?: number
          status?: string
          submission_date?: string
          survival_rate_commitment?: string
          tracking_tool_commitment?: boolean
          training_commitment?: boolean
          updated_at?: string
          volunteers?: number
        }
        Relationships: []
      }
      home_banners: {
        Row: {
          background_image_url: string
          created_at: string
          created_by: string | null
          cta_link: string
          cta_text: string
          display_order: number
          id: string
          is_active: boolean
          secondary_cta_link: string
          secondary_cta_text: string
          stats: Json
          subtitle: string
          title: string
          updated_at: string
        }
        Insert: {
          background_image_url: string
          created_at?: string
          created_by?: string | null
          cta_link: string
          cta_text: string
          display_order?: number
          id?: string
          is_active?: boolean
          secondary_cta_link: string
          secondary_cta_text: string
          stats?: Json
          subtitle: string
          title: string
          updated_at?: string
        }
        Update: {
          background_image_url?: string
          created_at?: string
          created_by?: string | null
          cta_link?: string
          cta_text?: string
          display_order?: number
          id?: string
          is_active?: boolean
          secondary_cta_link?: string
          secondary_cta_text?: string
          stats?: Json
          subtitle?: string
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "home_banners_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "admin_users"
            referencedColumns: ["id"]
          },
        ]
      }
      programs: {
        Row: {
          category: string
          color: string
          created_at: string
          created_by: string | null
          description: string
          display_order: number
          excerpt: string
          icon_name: string
          id: string
          image_url: string
          link_path: string
          status: string
          title: string
          updated_at: string
        }
        Insert: {
          category: string
          color?: string
          created_at?: string
          created_by?: string | null
          description: string
          display_order?: number
          excerpt: string
          icon_name: string
          id?: string
          image_url: string
          link_path: string
          status?: string
          title: string
          updated_at?: string
        }
        Update: {
          category?: string
          color?: string
          created_at?: string
          created_by?: string | null
          description?: string
          display_order?: number
          excerpt?: string
          icon_name?: string
          id?: string
          image_url?: string
          link_path?: string
          status?: string
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "programs_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "admin_users"
            referencedColumns: ["id"]
          },
        ]
      }
      recruitment_applications: {
        Row: {
          birth_certificate_url: string | null
          can_complete_trek: boolean
          contact_address: string
          created_at: string
          date_of_birth: string
          education_certificate_url: string | null
          email: string
          examination_number: string | null
          full_name: string
          gender: string
          graduation_year: string
          has_prior_training: boolean
          highest_qualification: string
          id: string
          lga_letter_url: string | null
          lga_of_origin: string
          nationality: string
          phone_number: string
          photo_url: string | null
          prior_training_details: string | null
          reference_number: string
          state_of_origin: string
          status: string
          updated_at: string
        }
        Insert: {
          birth_certificate_url?: string | null
          can_complete_trek: boolean
          contact_address: string
          created_at?: string
          date_of_birth: string
          education_certificate_url?: string | null
          email: string
          examination_number?: string | null
          full_name: string
          gender: string
          graduation_year: string
          has_prior_training: boolean
          highest_qualification: string
          id?: string
          lga_letter_url?: string | null
          lga_of_origin: string
          nationality: string
          phone_number: string
          photo_url?: string | null
          prior_training_details?: string | null
          reference_number: string
          state_of_origin: string
          status?: string
          updated_at?: string
        }
        Update: {
          birth_certificate_url?: string | null
          can_complete_trek?: boolean
          contact_address?: string
          created_at?: string
          date_of_birth?: string
          education_certificate_url?: string | null
          email?: string
          examination_number?: string | null
          full_name?: string
          gender?: string
          graduation_year?: string
          has_prior_training?: boolean
          highest_qualification?: string
          id?: string
          lga_letter_url?: string | null
          lga_of_origin?: string
          nationality?: string
          phone_number?: string
          photo_url?: string | null
          prior_training_details?: string | null
          reference_number?: string
          state_of_origin?: string
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      reports: {
        Row: {
          created_at: string
          description: string
          id: string
          location: string
          photos: Json | null
          reporter_email: string | null
          reporter_name: string
          reporter_phone: string | null
          resolution_notes: string | null
          resolved_at: string | null
          resolved_by: string | null
          status: string
          type: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description: string
          id?: string
          location: string
          photos?: Json | null
          reporter_email?: string | null
          reporter_name: string
          reporter_phone?: string | null
          resolution_notes?: string | null
          resolved_at?: string | null
          resolved_by?: string | null
          status?: string
          type: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string
          id?: string
          location?: string
          photos?: Json | null
          reporter_email?: string | null
          reporter_name?: string
          reporter_phone?: string | null
          resolution_notes?: string | null
          resolved_at?: string | null
          resolved_by?: string | null
          status?: string
          type?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "reports_resolved_by_fkey"
            columns: ["resolved_by"]
            isOneToOne: false
            referencedRelation: "admin_users"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      recruitment_applications_summary: {
        Row: {
          created_at: string | null
          email: string | null
          full_name: string | null
          highest_qualification: string | null
          id: string | null
          lga_of_origin: string | null
          phone_number: string | null
          reference_number: string | null
          status: string | null
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          highest_qualification?: string | null
          id?: string | null
          lga_of_origin?: string | null
          phone_number?: string | null
          reference_number?: string | null
          status?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          highest_qualification?: string | null
          id?: string | null
          lga_of_origin?: string | null
          phone_number?: string | null
          reference_number?: string | null
          status?: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      create_admin_user: {
        Args: {
          admin_email: string
          admin_password: string
          admin_name: string
          admin_role_param?: Database["public"]["Enums"]["admin_role"]
        }
        Returns: string
      }
      verify_admin_login: {
        Args: { admin_email: string; admin_password: string }
        Returns: {
          id: string
          email: string
          full_name: string
          role: Database["public"]["Enums"]["admin_role"]
          is_active: boolean
        }[]
      }
    }
    Enums: {
      admin_role: "super_admin" | "content_admin" | "reports_admin"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      admin_role: ["super_admin", "content_admin", "reports_admin"],
    },
  },
} as const
