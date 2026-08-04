import{j as a}from"./jsx-runtime-jQRlJpq_.js";import{r as p}from"./iframe-IekmBLgU.js";import{F,a as h,b as x}from"./DropzoneFileUpload-DOHCrzQo.js";import{F as y}from"./index-AboGxAif.js";import{I as b}from"./IconUpload2-CFTHRFR9.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-M3xTZvml.js";import"./index-BOjMRMBe.js";import"./Label-B2H_cz-p.js";import"./Text-DDH3SuXY.js";import"./helpers-CyjX8nkc.js";import"./useFormProps-Cbvvev0C.js";import"./types-Bkil3lR1.js";import"./ErrorMessage-B-5yUWUJ.js";import"./IconDynamicComponent-CGHa6Li-.js";import"./IconArrowDownloadFilled-r7HG-K5i.js";import"./Snackbar-De5mANEK.js";import"./Alert-DGYkq61k.js";import"./IconDismissFilled-Ct90Dzog.js";import"./Progress-CK7h180n.js";const V={title:"FileUpload",component:F,argTypes:{size:{options:["small","medium","large"],control:{type:"radio"}}}},w=s=>{const[t,l]=p.useState([]),e=o=>{o&&o.length&&l(o)};return a.jsx("div",{style:{width:400},children:a.jsx(F,{...s,getFiles:e,uploading:!1,fileAllowedSize:9e6,uploadedFiles:t,onError:o=>console.log("type",o)})})},i=w.bind({});i.args={label:"Label",buttonText:"Import",isFileUploaded:!1,dataTestId:"file-upload",iconProps:{Component:b,size:"small"}};async function U(s,t){const e=await(await fetch(s)).blob();return new File([e],t,{type:e.type})}const E=[{name:"file1.jpeg",url:"https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},{name:"file2.jpeg",url:"https://images.unsplash.com/photo-1731505103716-7ee6fa96dee5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}],z=s=>{const[t,l]=p.useState([]);return p.useEffect(()=>{E.forEach(e=>{U(e.url,e.name).then(o=>{l(g=>[...g,o])})})},[]),a.jsx("div",{style:{width:800},children:a.jsx(h,{...s,setFiles:l,selectedFiles:t,maxSize:30*1024*1024,accept:[y.IMAGE],mode:x.attach,multiple:!1})})},r=z.bind({});r.args={dataTestId:"dz-file-upload"};var n,d,m;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`args => {
  const [files, setFiles] = useState([]);
  const getFiles = _files => {
    if (_files && _files.length) {
      setFiles(_files);
    }
  };
  return <div style={{
    width: 400
  }}>
      <_FileUpload {...args} getFiles={getFiles} uploading={false} fileAllowedSize={9000000} uploadedFiles={files} onError={type => console.log('type', type)} />
    </div>;
}`,...(m=(d=i.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var c,f,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  const [files, setFiles] = useState([]);
  useEffect(() => {
    mockFiles.forEach(file => {
      urlToFile(file.url, file.name).then(file => {
        setFiles(prev => [...prev, file]);
      });
    });
  }, []);
  return <div style={{
    width: 800
  }}>
      <_DropzoneFileUpload {...args} setFiles={setFiles} selectedFiles={files} maxSize={30 * 1024 * 1024} accept={[FileTypeEnum.IMAGE]} mode={FileUploadMode.attach} multiple={false}
    // maxFiles={2}
    />
    </div>;
}`,...(u=(f=r.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};const W=["FileUpload","DropzoneFileUpload"];export{r as DropzoneFileUpload,i as FileUpload,W as __namedExportsOrder,V as default};
