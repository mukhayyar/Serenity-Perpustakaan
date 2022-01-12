namespace Serene1.Texts {

    declare namespace Db {

        namespace Administration {

            namespace Language {
                export const Id: string;
                export const LanguageId: string;
                export const LanguageName: string;
            }

            namespace Role {
                export const RoleId: string;
                export const RoleName: string;
            }

            namespace RolePermission {
                export const PermissionKey: string;
                export const RoleId: string;
                export const RolePermissionId: string;
                export const RoleRoleName: string;
            }

            namespace Translation {
                export const CustomText: string;
                export const EntityPlural: string;
                export const Key: string;
                export const OverrideConfirmation: string;
                export const SaveChangesButton: string;
                export const SourceLanguage: string;
                export const SourceText: string;
                export const TargetLanguage: string;
                export const TargetText: string;
            }

            namespace User {
                export const DisplayName: string;
                export const Email: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const LastDirectoryUpdate: string;
                export const Password: string;
                export const PasswordConfirm: string;
                export const PasswordHash: string;
                export const PasswordSalt: string;
                export const Source: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UserId: string;
                export const UserImage: string;
                export const Username: string;
            }

            namespace UserPermission {
                export const Granted: string;
                export const PermissionKey: string;
                export const User: string;
                export const UserId: string;
                export const UserPermissionId: string;
                export const Username: string;
            }

            namespace UserRole {
                export const RoleId: string;
                export const User: string;
                export const UserId: string;
                export const UserRoleId: string;
                export const Username: string;
            }
        }

        namespace Perpustakaan {

            namespace Anggota {
                export const AlamatAnggota: string;
                export const AnggotaId: string;
                export const JurusanAnggota: string;
                export const KelasAnggota: string;
                export const KodeAnggota: string;
                export const NamaAnggota: string;
                export const NoTelpAnggota: string;
            }

            namespace Buku {
                export const BukuId: string;
                export const KodeBuku: string;
                export const NamaBuku: string;
                export const PenerbitBuku: string;
                export const PenulisBuku: string;
                export const RakId: string;
                export const RakNamaRak: string;
                export const Stok: string;
                export const TahunPenerbit: string;
            }

            namespace Peminjaman {
                export const AnggotaAlamatAnggota: string;
                export const AnggotaId: string;
                export const AnggotaJurusanAnggota: string;
                export const AnggotaKelasAnggota: string;
                export const AnggotaKodeAnggota: string;
                export const AnggotaNamaAnggota: string;
                export const AnggotaNoTelpAnggota: string;
                export const BukuId: string;
                export const BukuKodeBuku: string;
                export const BukuNamaBuku: string;
                export const BukuPenerbitBuku: string;
                export const BukuPenulisBuku: string;
                export const BukuRakId: string;
                export const BukuStok: string;
                export const BukuTahunPenerbit: string;
                export const PeminjamanId: string;
                export const PetugasAlamatPetugas: string;
                export const PetugasId: string;
                export const PetugasNamaPetugas: string;
                export const PetugasNoTelpPetugas: string;
                export const TanggalKembali: string;
                export const TanggalPinjam: string;
            }

            namespace Pengembalian {
                export const AnggotaAlamatAnggota: string;
                export const AnggotaId: string;
                export const AnggotaJurusanAnggota: string;
                export const AnggotaKelasAnggota: string;
                export const AnggotaKodeAnggota: string;
                export const AnggotaNamaAnggota: string;
                export const AnggotaNoTelpAnggota: string;
                export const BukuId: string;
                export const BukuKodeBuku: string;
                export const BukuNamaBuku: string;
                export const BukuPenerbitBuku: string;
                export const BukuPenulisBuku: string;
                export const BukuRakId: string;
                export const BukuStok: string;
                export const BukuTahunPenerbit: string;
                export const Denda: string;
                export const PengembalianId: string;
                export const PetugasAlamatPetugas: string;
                export const PetugasId: string;
                export const PetugasNamaPetugas: string;
                export const PetugasNoTelpPetugas: string;
                export const TanggalPengembalian: string;
            }

            namespace Petugas {
                export const AlamatPetugas: string;
                export const NamaPetugas: string;
                export const NoTelpPetugas: string;
                export const PetugasId: string;
            }

            namespace Rak {
                export const NamaRak: string;
                export const RakId: string;
            }
        }
    }

    declare namespace Forms {

        namespace Membership {

            namespace ChangePassword {
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace ForgotPassword {
                export const BackToLogin: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace Login {
                export const FacebookButton: string;
                export const ForgotPassword: string;
                export const FormTitle: string;
                export const GoogleButton: string;
                export const OR: string;
                export const RememberMe: string;
                export const SignInButton: string;
                export const SignUpButton: string;
            }

            namespace ResetPassword {
                export const BackToLogin: string;
                export const EmailSubject: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace SignUp {
                export const AcceptTerms: string;
                export const ActivateEmailSubject: string;
                export const ActivationCompleteMessage: string;
                export const BackToLogin: string;
                export const ConfirmEmail: string;
                export const ConfirmPassword: string;
                export const DisplayName: string;
                export const Email: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const Password: string;
                export const SubmitButton: string;
                export const Success: string;
            }
        }
    }

    declare namespace Navigation {
        export const LogoutLink: string;
        export const SiteTitle: string;
    }

    declare namespace Site {

        namespace AccessDenied {
            export const ClickToChangeUser: string;
            export const ClickToLogin: string;
            export const LackPermissions: string;
            export const NotLoggedIn: string;
            export const PageTitle: string;
        }

        namespace BasicProgressDialog {
            export const CancelTitle: string;
            export const PleaseWait: string;
        }

        namespace BulkServiceAction {
            export const AllHadErrorsFormat: string;
            export const AllSuccessFormat: string;
            export const ConfirmationFormat: string;
            export const ErrorCount: string;
            export const NothingToProcess: string;
            export const SomeHadErrorsFormat: string;
            export const SuccessCount: string;
        }

        namespace Dashboard {
            export const ContentDescription: string;
        }

        namespace Layout {
            export const FooterCopyright: string;
            export const FooterInfo: string;
            export const FooterRights: string;
            export const GeneralSettings: string;
            export const Language: string;
            export const Theme: string;
            export const ThemeBlack: string;
            export const ThemeBlackLight: string;
            export const ThemeBlue: string;
            export const ThemeBlueLight: string;
            export const ThemeGreen: string;
            export const ThemeGreenLight: string;
            export const ThemePurple: string;
            export const ThemePurpleLight: string;
            export const ThemeRed: string;
            export const ThemeRedLight: string;
            export const ThemeYellow: string;
            export const ThemeYellowLight: string;
        }

        namespace RolePermissionDialog {
            export const DialogTitle: string;
            export const EditButton: string;
            export const SaveSuccess: string;
        }

        namespace UserDialog {
            export const EditPermissionsButton: string;
            export const EditRolesButton: string;
        }

        namespace UserPermissionDialog {
            export const DialogTitle: string;
            export const Grant: string;
            export const Permission: string;
            export const Revoke: string;
            export const SaveSuccess: string;
        }

        namespace UserRoleDialog {
            export const DialogTitle: string;
            export const SaveSuccess: string;
        }

        namespace ValidationError {
            export const Title: string;
        }
    }

    declare namespace Validation {
        export const AuthenticationError: string;
        export const CantFindUserWithEmail: string;
        export const CurrentPasswordMismatch: string;
        export const DeleteForeignKeyError: string;
        export const EmailConfirm: string;
        export const EmailInUse: string;
        export const InvalidActivateToken: string;
        export const InvalidResetToken: string;
        export const MinRequiredPasswordLength: string;
        export const SavePrimaryKeyError: string;
    }

    Serene1['Texts'] = Q.proxyTexts(Texts, '', {Db:{Administration:{Language:{Id:1,LanguageId:1,LanguageName:1},Role:{RoleId:1,RoleName:1},RolePermission:{PermissionKey:1,RoleId:1,RolePermissionId:1,RoleRoleName:1},Translation:{CustomText:1,EntityPlural:1,Key:1,OverrideConfirmation:1,SaveChangesButton:1,SourceLanguage:1,SourceText:1,TargetLanguage:1,TargetText:1},User:{DisplayName:1,Email:1,InsertDate:1,InsertUserId:1,IsActive:1,LastDirectoryUpdate:1,Password:1,PasswordConfirm:1,PasswordHash:1,PasswordSalt:1,Source:1,UpdateDate:1,UpdateUserId:1,UserId:1,UserImage:1,Username:1},UserPermission:{Granted:1,PermissionKey:1,User:1,UserId:1,UserPermissionId:1,Username:1},UserRole:{RoleId:1,User:1,UserId:1,UserRoleId:1,Username:1}},Perpustakaan:{Anggota:{AlamatAnggota:1,AnggotaId:1,JurusanAnggota:1,KelasAnggota:1,KodeAnggota:1,NamaAnggota:1,NoTelpAnggota:1},Buku:{BukuId:1,KodeBuku:1,NamaBuku:1,PenerbitBuku:1,PenulisBuku:1,RakId:1,RakNamaRak:1,Stok:1,TahunPenerbit:1},Peminjaman:{AnggotaAlamatAnggota:1,AnggotaId:1,AnggotaJurusanAnggota:1,AnggotaKelasAnggota:1,AnggotaKodeAnggota:1,AnggotaNamaAnggota:1,AnggotaNoTelpAnggota:1,BukuId:1,BukuKodeBuku:1,BukuNamaBuku:1,BukuPenerbitBuku:1,BukuPenulisBuku:1,BukuRakId:1,BukuStok:1,BukuTahunPenerbit:1,PeminjamanId:1,PetugasAlamatPetugas:1,PetugasId:1,PetugasNamaPetugas:1,PetugasNoTelpPetugas:1,TanggalKembali:1,TanggalPinjam:1},Pengembalian:{AnggotaAlamatAnggota:1,AnggotaId:1,AnggotaJurusanAnggota:1,AnggotaKelasAnggota:1,AnggotaKodeAnggota:1,AnggotaNamaAnggota:1,AnggotaNoTelpAnggota:1,BukuId:1,BukuKodeBuku:1,BukuNamaBuku:1,BukuPenerbitBuku:1,BukuPenulisBuku:1,BukuRakId:1,BukuStok:1,BukuTahunPenerbit:1,Denda:1,PengembalianId:1,PetugasAlamatPetugas:1,PetugasId:1,PetugasNamaPetugas:1,PetugasNoTelpPetugas:1,TanggalPengembalian:1},Petugas:{AlamatPetugas:1,NamaPetugas:1,NoTelpPetugas:1,PetugasId:1},Rak:{NamaRak:1,RakId:1}}},Forms:{Membership:{ChangePassword:{FormTitle:1,SubmitButton:1,Success:1},ForgotPassword:{BackToLogin:1,FormInfo:1,FormTitle:1,SubmitButton:1,Success:1},Login:{FacebookButton:1,ForgotPassword:1,FormTitle:1,GoogleButton:1,OR:1,RememberMe:1,SignInButton:1,SignUpButton:1},ResetPassword:{BackToLogin:1,EmailSubject:1,FormTitle:1,SubmitButton:1,Success:1},SignUp:{AcceptTerms:1,ActivateEmailSubject:1,ActivationCompleteMessage:1,BackToLogin:1,ConfirmEmail:1,ConfirmPassword:1,DisplayName:1,Email:1,FormInfo:1,FormTitle:1,Password:1,SubmitButton:1,Success:1}}},Navigation:{LogoutLink:1,SiteTitle:1},Site:{AccessDenied:{ClickToChangeUser:1,ClickToLogin:1,LackPermissions:1,NotLoggedIn:1,PageTitle:1},BasicProgressDialog:{CancelTitle:1,PleaseWait:1},BulkServiceAction:{AllHadErrorsFormat:1,AllSuccessFormat:1,ConfirmationFormat:1,ErrorCount:1,NothingToProcess:1,SomeHadErrorsFormat:1,SuccessCount:1},Dashboard:{ContentDescription:1},Layout:{FooterCopyright:1,FooterInfo:1,FooterRights:1,GeneralSettings:1,Language:1,Theme:1,ThemeBlack:1,ThemeBlackLight:1,ThemeBlue:1,ThemeBlueLight:1,ThemeGreen:1,ThemeGreenLight:1,ThemePurple:1,ThemePurpleLight:1,ThemeRed:1,ThemeRedLight:1,ThemeYellow:1,ThemeYellowLight:1},RolePermissionDialog:{DialogTitle:1,EditButton:1,SaveSuccess:1},UserDialog:{EditPermissionsButton:1,EditRolesButton:1},UserPermissionDialog:{DialogTitle:1,Grant:1,Permission:1,Revoke:1,SaveSuccess:1},UserRoleDialog:{DialogTitle:1,SaveSuccess:1},ValidationError:{Title:1}},Validation:{AuthenticationError:1,CantFindUserWithEmail:1,CurrentPasswordMismatch:1,DeleteForeignKeyError:1,EmailConfirm:1,EmailInUse:1,InvalidActivateToken:1,InvalidResetToken:1,MinRequiredPasswordLength:1,SavePrimaryKeyError:1}});
}
