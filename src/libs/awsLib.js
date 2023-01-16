import{ Storage} from "aws-amplify";

//takes file object as parameter
//generates unique file name using current timestamp
//upload file to user's folder in s3
//return the stored object's key

export async function s3Upload(file){
    const filename = `${Date.now()}-${file.name}`;

    const stored = await Storage.vault.put(filename,file,{
        contentType: file.type,
    });

    return stored.key;
}