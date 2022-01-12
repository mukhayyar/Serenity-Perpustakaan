/// <reference types="serenity.corelib" />
/// <reference types="jquery" />
/// <reference types="jquery.blockui" />
/// <reference types="jquery.validation" />
/// <reference types="jqueryui" />
/// <reference types="serenity.pro.ui" />
/// <reference types="serenity.pro.extensions" />
declare namespace Serene1.Administration {
    class LanguageColumns {
        static columnsKey: string;
    }
}
declare namespace Serene1.Administration {
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serene1.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        const deletePermission = "Administration:Translation";
        const insertPermission = "Administration:Translation";
        const readPermission = "Administration:Translation";
        const updatePermission = "Administration:Translation";
        const enum Fields {
            Id = "Id",
            LanguageId = "LanguageId",
            LanguageName = "LanguageName"
        }
    }
}
declare namespace Serene1.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Language/Create",
            Update = "Administration/Language/Update",
            Delete = "Administration/Language/Delete",
            Retrieve = "Administration/Language/Retrieve",
            List = "Administration/Language/List"
        }
    }
}
declare namespace Serene1.Administration {
    namespace PermissionKeys {
        const Security = "Administration:Security";
        const Translation = "Administration:Translation";
    }
}
declare namespace Serene1.Administration {
    class RoleColumns {
        static columnsKey: string;
    }
}
declare namespace Serene1.Administration {
    interface RoleForm {
        RoleName: Serenity.StringEditor;
    }
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serene1.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace Serene1.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace Serene1.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RolePermissionId = "RolePermissionId",
            RoleId = "RoleId",
            PermissionKey = "PermissionKey",
            RoleRoleName = "RoleRoleName"
        }
    }
}
declare namespace Serene1.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/RolePermission/Update",
            List = "Administration/RolePermission/List"
        }
    }
}
declare namespace Serene1.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace Serene1.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RoleId = "RoleId",
            RoleName = "RoleName"
        }
    }
}
declare namespace Serene1.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Role/Create",
            Update = "Administration/Role/Update",
            Delete = "Administration/Role/Delete",
            Retrieve = "Administration/Role/Retrieve",
            List = "Administration/Role/List"
        }
    }
}
declare namespace Serene1.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace Serene1.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace Serene1.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "Administration/Translation/List",
            Update = "Administration/Translation/Update"
        }
    }
}
declare namespace Serene1.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace Serene1.Administration {
    class UserColumns {
        static columnsKey: string;
    }
}
declare namespace Serene1.Administration {
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
    }
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serene1.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace Serene1.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserPermissionId = "UserPermissionId",
            UserId = "UserId",
            PermissionKey = "PermissionKey",
            Granted = "Granted",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace Serene1.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserPermission/Update",
            List = "Administration/UserPermission/List",
            ListRolePermissions = "Administration/UserPermission/ListRolePermissions",
            ListPermissionKeys = "Administration/UserPermission/ListPermissionKeys"
        }
    }
}
declare namespace Serene1.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace Serene1.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace Serene1.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace Serene1.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserRoleId = "UserRoleId",
            UserId = "UserId",
            RoleId = "RoleId",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace Serene1.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserRole/Update",
            List = "Administration/UserRole/List"
        }
    }
}
declare namespace Serene1.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace Serene1.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        function getLookup(): Q.Lookup<UserRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserId = "UserId",
            Username = "Username",
            Source = "Source",
            PasswordHash = "PasswordHash",
            PasswordSalt = "PasswordSalt",
            DisplayName = "DisplayName",
            Email = "Email",
            UserImage = "UserImage",
            LastDirectoryUpdate = "LastDirectoryUpdate",
            IsActive = "IsActive",
            Password = "Password",
            PasswordConfirm = "PasswordConfirm",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Serene1.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/User/Create",
            Update = "Administration/User/Update",
            Delete = "Administration/User/Delete",
            Undelete = "Administration/User/Undelete",
            Retrieve = "Administration/User/Retrieve",
            List = "Administration/User/List"
        }
    }
}
declare namespace Serene1.Membership {
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serene1.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace Serene1.Membership {
    interface ForgotPasswordForm {
        Email: Serenity.EmailEditor;
    }
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serene1.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace Serene1.Membership {
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serene1.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
    }
}
declare namespace Serene1.Membership {
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serene1.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace Serene1.Membership {
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        ConfirmEmail: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serene1.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace Serene1.Perpustakaan {
    class AnggotaColumns {
        static columnsKey: string;
    }
}
declare namespace Serene1.Perpustakaan {
    interface AnggotaForm {
        KodeAnggota: Serenity.StringEditor;
        NamaAnggota: Serenity.StringEditor;
        KelasAnggota: Serenity.StringEditor;
        JurusanAnggota: Serenity.StringEditor;
        NoTelpAnggota: Serenity.StringEditor;
        AlamatAnggota: Serenity.StringEditor;
    }
    class AnggotaForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serene1.Perpustakaan {
    interface AnggotaRow {
        AnggotaId?: number;
        KodeAnggota?: string;
        NamaAnggota?: string;
        KelasAnggota?: string;
        JurusanAnggota?: string;
        NoTelpAnggota?: string;
        AlamatAnggota?: string;
    }
    namespace AnggotaRow {
        const idProperty = "AnggotaId";
        const nameProperty = "KodeAnggota";
        const localTextPrefix = "Perpustakaan.Anggota";
        const lookupKey = "Perpustakaan.Anggota";
        function getLookup(): Q.Lookup<AnggotaRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            AnggotaId = "AnggotaId",
            KodeAnggota = "KodeAnggota",
            NamaAnggota = "NamaAnggota",
            KelasAnggota = "KelasAnggota",
            JurusanAnggota = "JurusanAnggota",
            NoTelpAnggota = "NoTelpAnggota",
            AlamatAnggota = "AlamatAnggota"
        }
    }
}
declare namespace Serene1.Perpustakaan {
    namespace AnggotaService {
        const baseUrl = "Perpustakaan/Anggota";
        function Create(request: Serenity.SaveRequest<AnggotaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AnggotaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AnggotaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AnggotaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Perpustakaan/Anggota/Create",
            Update = "Perpustakaan/Anggota/Update",
            Delete = "Perpustakaan/Anggota/Delete",
            Retrieve = "Perpustakaan/Anggota/Retrieve",
            List = "Perpustakaan/Anggota/List"
        }
    }
}
declare namespace Serene1.Perpustakaan {
    class BukuColumns {
        static columnsKey: string;
    }
}
declare namespace Serene1.Perpustakaan {
    interface BukuForm {
        KodeBuku: Serenity.StringEditor;
        NamaBuku: Serenity.StringEditor;
        PenulisBuku: Serenity.StringEditor;
        PenerbitBuku: Serenity.StringEditor;
        TahunPenerbit: Serenity.StringEditor;
        Stok: Serenity.IntegerEditor;
        RakId: Serenity.LookupEditor;
    }
    class BukuForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serene1.Perpustakaan {
    interface BukuRow {
        BukuId?: number;
        KodeBuku?: string;
        NamaBuku?: string;
        PenulisBuku?: string;
        PenerbitBuku?: string;
        TahunPenerbit?: string;
        Stok?: number;
        RakId?: number;
        RakNamaRak?: string;
    }
    namespace BukuRow {
        const idProperty = "BukuId";
        const nameProperty = "KodeBuku";
        const localTextPrefix = "Perpustakaan.Buku";
        const lookupKey = "Perpustakaan.Buku";
        function getLookup(): Q.Lookup<BukuRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            BukuId = "BukuId",
            KodeBuku = "KodeBuku",
            NamaBuku = "NamaBuku",
            PenulisBuku = "PenulisBuku",
            PenerbitBuku = "PenerbitBuku",
            TahunPenerbit = "TahunPenerbit",
            Stok = "Stok",
            RakId = "RakId",
            RakNamaRak = "RakNamaRak"
        }
    }
}
declare namespace Serene1.Perpustakaan {
    namespace BukuService {
        const baseUrl = "Perpustakaan/Buku";
        function Create(request: Serenity.SaveRequest<BukuRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BukuRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BukuRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BukuRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Perpustakaan/Buku/Create",
            Update = "Perpustakaan/Buku/Update",
            Delete = "Perpustakaan/Buku/Delete",
            Retrieve = "Perpustakaan/Buku/Retrieve",
            List = "Perpustakaan/Buku/List"
        }
    }
}
declare namespace Serene1.Perpustakaan {
    class PeminjamanColumns {
        static columnsKey: string;
    }
}
declare namespace Serene1.Perpustakaan {
    interface PeminjamanForm {
        TanggalPinjam: Serenity.DateEditor;
        TanggalKembali: Serenity.DateEditor;
        BukuId: Serenity.LookupEditor;
        AnggotaId: Serenity.LookupEditor;
        PetugasId: Serenity.LookupEditor;
    }
    class PeminjamanForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serene1.Perpustakaan {
    interface PeminjamanRow {
        PeminjamanId?: number;
        TanggalPinjam?: string;
        TanggalKembali?: string;
        BukuId?: number;
        AnggotaId?: number;
        PetugasId?: number;
        BukuKodeBuku?: string;
        BukuNamaBuku?: string;
        BukuPenulisBuku?: string;
        BukuPenerbitBuku?: string;
        BukuTahunPenerbit?: string;
        BukuStok?: number;
        BukuRakId?: number;
        AnggotaKodeAnggota?: string;
        AnggotaNamaAnggota?: string;
        AnggotaKelasAnggota?: string;
        AnggotaJurusanAnggota?: string;
        AnggotaNoTelpAnggota?: string;
        AnggotaAlamatAnggota?: string;
        PetugasNamaPetugas?: string;
        PetugasNoTelpPetugas?: string;
        PetugasAlamatPetugas?: string;
    }
    namespace PeminjamanRow {
        const idProperty = "PeminjamanId";
        const localTextPrefix = "Perpustakaan.Peminjaman";
        const lookupKey = "Perpustakaan.Peminjaman";
        function getLookup(): Q.Lookup<PeminjamanRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            PeminjamanId = "PeminjamanId",
            TanggalPinjam = "TanggalPinjam",
            TanggalKembali = "TanggalKembali",
            BukuId = "BukuId",
            AnggotaId = "AnggotaId",
            PetugasId = "PetugasId",
            BukuKodeBuku = "BukuKodeBuku",
            BukuNamaBuku = "BukuNamaBuku",
            BukuPenulisBuku = "BukuPenulisBuku",
            BukuPenerbitBuku = "BukuPenerbitBuku",
            BukuTahunPenerbit = "BukuTahunPenerbit",
            BukuStok = "BukuStok",
            BukuRakId = "BukuRakId",
            AnggotaKodeAnggota = "AnggotaKodeAnggota",
            AnggotaNamaAnggota = "AnggotaNamaAnggota",
            AnggotaKelasAnggota = "AnggotaKelasAnggota",
            AnggotaJurusanAnggota = "AnggotaJurusanAnggota",
            AnggotaNoTelpAnggota = "AnggotaNoTelpAnggota",
            AnggotaAlamatAnggota = "AnggotaAlamatAnggota",
            PetugasNamaPetugas = "PetugasNamaPetugas",
            PetugasNoTelpPetugas = "PetugasNoTelpPetugas",
            PetugasAlamatPetugas = "PetugasAlamatPetugas"
        }
    }
}
declare namespace Serene1.Perpustakaan {
    namespace PeminjamanService {
        const baseUrl = "Perpustakaan/Peminjaman";
        function Create(request: Serenity.SaveRequest<PeminjamanRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PeminjamanRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PeminjamanRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PeminjamanRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Perpustakaan/Peminjaman/Create",
            Update = "Perpustakaan/Peminjaman/Update",
            Delete = "Perpustakaan/Peminjaman/Delete",
            Retrieve = "Perpustakaan/Peminjaman/Retrieve",
            List = "Perpustakaan/Peminjaman/List"
        }
    }
}
declare namespace Serene1.Perpustakaan {
    class PengembalianColumns {
        static columnsKey: string;
    }
}
declare namespace Serene1.Perpustakaan {
    interface PengembalianForm {
        TanggalPengembalian: Serenity.DateEditor;
        Denda: Serenity.IntegerEditor;
        BukuId: Serenity.LookupEditor;
        AnggotaId: Serenity.LookupEditor;
        PetugasId: Serenity.LookupEditor;
    }
    class PengembalianForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serene1.Perpustakaan {
    interface PengembalianRow {
        PengembalianId?: number;
        TanggalPengembalian?: string;
        Denda?: number;
        BukuId?: number;
        AnggotaId?: number;
        PetugasId?: number;
        BukuKodeBuku?: string;
        BukuNamaBuku?: string;
        BukuPenulisBuku?: string;
        BukuPenerbitBuku?: string;
        BukuTahunPenerbit?: string;
        BukuStok?: number;
        BukuRakId?: number;
        AnggotaKodeAnggota?: string;
        AnggotaNamaAnggota?: string;
        AnggotaKelasAnggota?: string;
        AnggotaJurusanAnggota?: string;
        AnggotaNoTelpAnggota?: string;
        AnggotaAlamatAnggota?: string;
        PetugasNamaPetugas?: string;
        PetugasNoTelpPetugas?: string;
        PetugasAlamatPetugas?: string;
    }
    namespace PengembalianRow {
        const idProperty = "PengembalianId";
        const localTextPrefix = "Perpustakaan.Pengembalian";
        const lookupKey = "Perpustakaan.Pengembalian";
        function getLookup(): Q.Lookup<PengembalianRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            PengembalianId = "PengembalianId",
            TanggalPengembalian = "TanggalPengembalian",
            Denda = "Denda",
            BukuId = "BukuId",
            AnggotaId = "AnggotaId",
            PetugasId = "PetugasId",
            BukuKodeBuku = "BukuKodeBuku",
            BukuNamaBuku = "BukuNamaBuku",
            BukuPenulisBuku = "BukuPenulisBuku",
            BukuPenerbitBuku = "BukuPenerbitBuku",
            BukuTahunPenerbit = "BukuTahunPenerbit",
            BukuStok = "BukuStok",
            BukuRakId = "BukuRakId",
            AnggotaKodeAnggota = "AnggotaKodeAnggota",
            AnggotaNamaAnggota = "AnggotaNamaAnggota",
            AnggotaKelasAnggota = "AnggotaKelasAnggota",
            AnggotaJurusanAnggota = "AnggotaJurusanAnggota",
            AnggotaNoTelpAnggota = "AnggotaNoTelpAnggota",
            AnggotaAlamatAnggota = "AnggotaAlamatAnggota",
            PetugasNamaPetugas = "PetugasNamaPetugas",
            PetugasNoTelpPetugas = "PetugasNoTelpPetugas",
            PetugasAlamatPetugas = "PetugasAlamatPetugas"
        }
    }
}
declare namespace Serene1.Perpustakaan {
    namespace PengembalianService {
        const baseUrl = "Perpustakaan/Pengembalian";
        function Create(request: Serenity.SaveRequest<PengembalianRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PengembalianRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PengembalianRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PengembalianRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Perpustakaan/Pengembalian/Create",
            Update = "Perpustakaan/Pengembalian/Update",
            Delete = "Perpustakaan/Pengembalian/Delete",
            Retrieve = "Perpustakaan/Pengembalian/Retrieve",
            List = "Perpustakaan/Pengembalian/List"
        }
    }
}
declare namespace Serene1.Perpustakaan {
    class PetugasColumns {
        static columnsKey: string;
    }
}
declare namespace Serene1.Perpustakaan {
    interface PetugasForm {
        NamaPetugas: Serenity.StringEditor;
        NoTelpPetugas: Serenity.StringEditor;
        AlamatPetugas: Serenity.StringEditor;
    }
    class PetugasForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serene1.Perpustakaan {
    interface PetugasRow {
        PetugasId?: number;
        NamaPetugas?: string;
        NoTelpPetugas?: string;
        AlamatPetugas?: string;
    }
    namespace PetugasRow {
        const idProperty = "PetugasId";
        const nameProperty = "NamaPetugas";
        const localTextPrefix = "Perpustakaan.Petugas";
        const lookupKey = "Perpustakaan.Petugas";
        function getLookup(): Q.Lookup<PetugasRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            PetugasId = "PetugasId",
            NamaPetugas = "NamaPetugas",
            NoTelpPetugas = "NoTelpPetugas",
            AlamatPetugas = "AlamatPetugas"
        }
    }
}
declare namespace Serene1.Perpustakaan {
    namespace PetugasService {
        const baseUrl = "Perpustakaan/Petugas";
        function Create(request: Serenity.SaveRequest<PetugasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PetugasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PetugasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PetugasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Perpustakaan/Petugas/Create",
            Update = "Perpustakaan/Petugas/Update",
            Delete = "Perpustakaan/Petugas/Delete",
            Retrieve = "Perpustakaan/Petugas/Retrieve",
            List = "Perpustakaan/Petugas/List"
        }
    }
}
declare namespace Serene1.Perpustakaan {
    class RakBukuColumns {
        static columnsKey: string;
    }
}
declare namespace Serene1.Perpustakaan {
    class RakColumns {
        static columnsKey: string;
    }
}
declare namespace Serene1.Perpustakaan {
    interface RakForm {
        NamaRak: Serenity.StringEditor;
    }
    class RakForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serene1.Perpustakaan {
    interface RakRow {
        RakId?: number;
        NamaRak?: string;
    }
    namespace RakRow {
        const idProperty = "RakId";
        const nameProperty = "NamaRak";
        const localTextPrefix = "Perpustakaan.Rak";
        const lookupKey = "Perpustakaan.Rak";
        function getLookup(): Q.Lookup<RakRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            RakId = "RakId",
            NamaRak = "NamaRak"
        }
    }
}
declare namespace Serene1.Perpustakaan {
    namespace RakService {
        const baseUrl = "Perpustakaan/Rak";
        function Create(request: Serenity.SaveRequest<RakRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RakRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RakRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RakRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Perpustakaan/Rak/Create",
            Update = "Perpustakaan/Rak/Update",
            Delete = "Perpustakaan/Rak/Delete",
            Retrieve = "Perpustakaan/Rak/Retrieve",
            List = "Perpustakaan/Rak/List"
        }
    }
}
declare namespace Serene1 {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace Serene1.Texts {
}
declare namespace Serene1.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace Serene1.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): LanguageRow.Fields[];
    }
}
declare namespace Serene1.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace Serene1.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): RoleRow.Fields[];
    }
}
declare namespace Serene1.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare namespace Serene1.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): PromiseLike<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace Serene1.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace Serene1.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): UserRow.Fields[];
    }
}
declare namespace Serene1.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace Serene1.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass;
        private roleOrImplicit;
        private getItemEffectiveClass;
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains;
        private getDescendants;
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey;
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys;
        get value(): UserPermissionRow[];
        set value(value: UserPermissionRow[]);
        private _rolePermissions;
        get rolePermissions(): string[];
        set rolePermissions(value: string[]);
        private _implicitPermissions;
        set implicitPermissions(value: Q.Dictionary<string[]>);
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace Serene1.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace Serene1.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace Serene1.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare namespace Serene1.LanguageList {
    function getValue(): string[][];
}
declare namespace Serene1.ScriptInitialization {
}
declare namespace Serene1.Common {
    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }
}
declare namespace Serene1.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace Serene1.Common {
    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
        protected getCurrentTheme(): string;
    }
}
declare namespace Serene1.Membership {
    class LoginPanel extends Serenity.PropertyPanel<LoginRequest, any> {
        protected getFormKey(): string;
        constructor(container: JQuery);
        protected redirectToReturnUrl(): void;
        protected getTemplate(): string;
    }
}
declare namespace Serene1.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace Serene1.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace Serene1.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace Serene1.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace Serene1.Perpustakaan {
    class AnggotaDialog extends Serenity.EntityDialog<AnggotaRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: AnggotaForm;
    }
}
declare namespace Serene1.Perpustakaan {
    class AnggotaGrid extends Serenity.EntityGrid<AnggotaRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AnggotaDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Serene1.Perpustakaan {
    class BukuDialog extends Serenity.EntityDialog<BukuRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: BukuForm;
    }
}
declare namespace Serene1.Perpustakaan {
    class BukuGrid extends Serenity.EntityGrid<BukuRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BukuDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Serene1.Perpustakaan {
    class PeminjamanDialog extends Serenity.EntityDialog<PeminjamanRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: PeminjamanForm;
    }
}
declare namespace Serene1.Perpustakaan {
    class PeminjamanGrid extends Serenity.EntityGrid<PeminjamanRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PeminjamanDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace Serene1.Perpustakaan {
    class PengembalianDialog extends Serenity.EntityDialog<PengembalianRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: PengembalianForm;
    }
}
declare namespace Serene1.Perpustakaan {
    class PengembalianGrid extends Serenity.EntityGrid<PengembalianRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PengembalianDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace Serene1.Perpustakaan {
    class PetugasDialog extends Serenity.EntityDialog<PetugasRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: PetugasForm;
    }
}
declare namespace Serene1.Perpustakaan {
    class PetugasGrid extends Serenity.EntityGrid<PetugasRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PetugasDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Serene1.Perpustakaan {
    class RakBukuGrid extends Serenity.EntityGrid<BukuRow, any> {
        protected getColumnsKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): any;
        protected getInitialTitle(): any;
        protected usePager(): boolean;
        protected getGridCanLoad(): boolean;
        private _rakID;
        get rakID(): number;
        set rakID(value: number);
    }
}
declare namespace Serene1.Perpustakaan {
    class RakDialog extends Serenity.EntityDialog<RakRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: RakForm;
        private bukuGrid;
        constructor();
        protected afterLoadEntity(): void;
        protected getTemplate(): string;
    }
}
declare namespace Serene1.Perpustakaan {
    class RakGrid extends Serenity.EntityGrid<RakRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RakDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
