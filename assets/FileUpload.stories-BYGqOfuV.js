import{j as a}from"./jsx-runtime-DL0a8zbO.js";import{r as n}from"./iframe-BVj2ick4.js";import{F,a as x,b as g}from"./DropzoneFileUpload-B_Bp1oqV.js";import{I as y}from"./IconInfo-FRTELuNe.js";import{F as b}from"./index-AboGxAif.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CXI3QB7B.js";import"./index-k9maOmz4.js";import"./Label-CpUk_1OC.js";import"./Text-CxAVKHxY.js";import"./helpers-DYfCdv0W.js";import"./useFormProps-CY41BHQ6.js";import"./types-CnM4o-t9.js";import"./ErrorMessage-bkzzL1F8.js";import"./IconDynamicComponent-gkrEy0R9.js";import"./IconArrowDownloadFilled-B16BV52z.js";import"./Snackbar-Cyql0W9K.js";import"./Alert-BZo8PGNq.js";import"./IconDismissFilled-Bx0dGW5U.js";import"./Progress-CUJElxYR.js";const W={title:"FileUpload",component:F},w=s=>{const[o,l]=n.useState([]),e=t=>{t&&t.length&&l(t)};return a.jsx("div",{style:{width:400},children:a.jsx(F,{...s,getFiles:e,fileAllowedSize:9e6,uploadedFiles:o,onError:t=>console.log("type",t)})})},i=w.bind({});i.args={label:"Label",buttonText:"Attach file",isFileUploaded:!1,dataTestId:"file-upload",labelAddons:a.jsx(y,{size:"xsmall",type:"information",className:"ml-4"})};async function E(s,o){const e=await(await fetch(s)).blob();return new File([e],o,{type:e.type})}const U=[{name:"file1.jpeg",url:"https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},{name:"file2.jpeg",url:"https://images.unsplash.com/photo-1731505103716-7ee6fa96dee5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}],j=s=>{const[o,l]=n.useState([]);return n.useEffect(()=>{U.forEach(e=>{E(e.url,e.name).then(t=>{l(h=>[...h,t])})})},[]),a.jsx("div",{style:{width:800},children:a.jsx(x,{...s,setFiles:l,selectedFiles:o,maxSize:30*1024*1024,accept:[b.IMAGE],mode:g.attach,multiple:!1})})},r=j.bind({});r.args={dataTestId:"dz-file-upload"};var p,m,d;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  const [files, setFiles] = useState([]);
  const getFiles = _files => {
    if (_files && _files.length) {
      setFiles(_files);
    }
  };
  return <div style={{
    width: 400
  }}>
      <_FileUpload {...args} getFiles={getFiles} fileAllowedSize={9000000} uploadedFiles={files} onError={type => console.log('type', type)} />
    </div>;
}`,...(d=(m=i.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var c,f,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
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
}`,...(u=(f=r.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};const Y=["FileUpload","DropzoneFileUpload"];export{r as DropzoneFileUpload,i as FileUpload,Y as __namedExportsOrder,W as default};
