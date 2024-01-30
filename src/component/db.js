export const data ={
    fields:[
        {
            fieldtype:'text',
            fieldname:'fName',
            lable:'First Name',
            placeholder:'Enter Your First Name',
            aria_describedby:'passwordHelpInline',
            classname:'form-control',
            width:"39rem",
            htmlfor:"inputfname",
            id:'inputfname'
        },
        {
            fieldtype:'text',
            fieldname:'lName',
            
            lable:'Last Name',
            placeholder:'Enter Your Last Name',
            aria_describedby:'passwordHelpInline',
            classname:'form-control',
            width:"39rem",
            htmlfor:"inputlname",
            id:"inputlname"
        },
        {
            fieldtype:'number',
            fieldname:'age',
            lable:'Age',
            placeholder:'Enter Your Age',
            aria_describedby:'passwordHelpInline',
            min:'0',
            classname:'form-control',
            width:"39rem",
            marginLeft:'2.9rem',
            htmlfor:"inputage",
            id:"inputage"
        },
        {
            fieldtype:'email',
            fieldname:'email',
            lable:'Email',
            placeholder:'Enter Your Email',
            aria_describedby:'passwordHelpInline',
            classname:'form-control',
            width:"39rem",
            marginLeft:'2.3rem',
            htmlfor:"inputemail",
            id:"inputemail"
        },
        {
            fieldtype:'radio',
            fieldname:'gender',
            value:'Male',
            lable:'Male',
        },
        {
            fieldtype:'radio',
            fieldname:'gender',
            value:'Female',
            lable:'Female',
        },
        {
            fieldtype:'checkbox',
            fieldname:'hobies',
            value:'Cricket',
            lable:'Cricket',
        },
        {
            fieldtype:'checkbox',
            fieldname:'hobies',
            value:'Singing',
            lable:'Singing',
        },
        {
            fieldtype:'checkbox',
            fieldname:'hobies',
            value:'Reading',
            lable:'Reading',
        },
        
        {
            fieldtype:'select',
            name:'city',
            option:[
                {name:'Select your city', default:'true', id:1, value:'Select your city'},
                {name:'Ahmedabad',  id:2, value:'Ahmedabad'},
                {name:'Surat',  id:3, value:'Surat'},
                {name:'Vadodra',  id:4, value:'Vadodra'},
                {name:'Gandhinagar',  id:2, value:'Gandhinagar'},
            ],
            classname:'form-select'
        },
        {
            fieldtype:'submit',
            value:'Submit',
            classname:'form-control'

        },
        
    ]
}