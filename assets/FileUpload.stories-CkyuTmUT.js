import{j as a}from"./jsx-runtime-D8Aae-ON.js";import{r as n}from"./iframe-B81V5N6F.js";import{F as u,a as x,b as g}from"./DropzoneFileUpload--ulgiC-A.js";import{I as y}from"./IconInfo-7omR3vNU.js";import{F as b}from"./index-DYDl_GcV.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BGtuaa-S.js";import"./index-CVLUGf02.js";import"./Label-4tt216Fv.js";import"./Text-CFXTsjcN.js";import"./helpers-B_1klYl0.js";import"./useFormProps-DtuzyFKZ.js";import"./types-BSP-PZIs.js";import"./ErrorMessage-DGYZ5GRk.js";import"./IconDynamicComponent-B8iT7Oal.js";import"./IconDelete-DyQ_33-n.js";import"./IconArrowDownloadFilled-BledpFkq.js";import"./Snackbar-CrKzW5vC.js";import"./Alert-D2dknDYi.js";import"./IconDismissFilled-DF3etHKr.js";import"./Progress-Doq3EprY.js";const Y={title:"FileUpload",component:u},w=s=>{const[o,l]=n.useState([]),e=t=>{t&&t.length&&l(t)};return a.jsx("div",{style:{width:400},children:a.jsx(u,{...s,getFiles:e,fileAllowedSize:9e6,uploadedFiles:o,onError:t=>console.log("type",t)})})},i=w.bind({});i.args={label:"Label",buttonText:"Attach file",isFileUploaded:!1,labelAddons:a.jsx(y,{size:"xsmall",type:"information",className:"ml-4"})};async function E(s,o){const e=await(await fetch(s)).blob();return new File([e],o,{type:e.type})}const U=[{name:"file1.jpeg",url:"https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},{name:"file2.jpeg",url:"https://images.unsplash.com/photo-1731505103716-7ee6fa96dee5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}],j=s=>{const[o,l]=n.useState([]);return n.useEffect(()=>{U.forEach(e=>{E(e.url,e.name).then(t=>{l(h=>[...h,t])})})},[]),a.jsx("div",{style:{width:800},children:a.jsx(x,{...s,setFiles:l,selectedFiles:o,maxSize:30*1024*1024,accept:[b.IMAGE],mode:g.attach,multiple:!1})})},r=j.bind({});r.args={};var p,m,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
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
}`,...(c=(m=i.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var d,f,F;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
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
}`,...(F=(f=r.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};const C=["FileUpload","DropzoneFileUpload"];export{r as DropzoneFileUpload,i as FileUpload,C as __namedExportsOrder,Y as default};
