import{j as e}from"./jsx-runtime-ulFhvTE4.js";import{r as i}from"./iframe-Dn6We4Lg.js";import{M as C,N as I}from"./NestedMenu-D51KKFpP.js";import{B as b}from"./Button-DPGoAH7n.js";import{I as y}from"./IconArrowDownloadFilled-BfFley4b.js";import{I as g,a as h,b as x}from"./IconBeach-C_E4N7Cx.js";import{I as M}from"./IconMore-1lGy-qx1.js";import{I as O}from"./IconCheckmark-DjPO1SrD.js";import{I as n}from"./IconSettings-7AFTP2Bq.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-BHtLSWVe.js";import"./index-DsYGpupK.js";import"./Text-B75uynss.js";import"./helpers-ilfnnDdj.js";import"./index-AboGxAif.js";import"./types-CZbxrT3T.js";import"./index-CsPjF0-x.js";import"./useOnOutsideClick-Cql2elBM.js";import"./CollapseGroup-B1Bs6oF3.js";import"./Divider-DKN9aqWJ.js";import"./AnimatePresenceWrapper-eangPm5n.js";import"./IconChevronDown-_4nedJFf.js";import"./IconChevronUp-jWGWpUDx.js";import"./IconChevronRight-ChTBgkdH.js";import"./AvatarGroup-BbgzJ0Y3.js";import"./DropzoneFileUpload-8ZhElACi.js";import"./Label-9NEXTOB8.js";import"./useFormProps-D4Rlq7yN.js";import"./ErrorMessage-BOQd-o5G.js";import"./IconDynamicComponent-cFzdD1O-.js";import"./Snackbar-DF5j3Dd9.js";import"./Alert-CbydXDhN.js";import"./IconDismissFilled-mwzfd_r5.js";import"./Progress-C-x4wWmB.js";import"./IconAdd-BGJ03-M7.js";import"./Checkbox-IJZiOzE4.js";import"./Popover-D0FYmOx3.js";import"./IconDismiss-CwYqehmb.js";import"./Link-DxOklqCN.js";import"./IconInfo-DQtejjxu.js";const ve={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  return <div>
      <div style={{
      position: 'relative',
      width: 'fit-content'
    }} ref={setRef}>
        <Button onClick={() => setOpen(!open)} iconProps={{
        Component: IconMore
      }} />
        <_Menu {...args} onClose={() => setOpen(false)} parentRef={ref} menuItems={items} isOpen={open} />
      </div>
    </div>;
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,f,v;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`(args: any) => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  return <div style={{
    display: 'flex',
    justifyContent: 'flex-end'
  }}>
      <div style={{
      position: 'relative',
      width: 'fit-content'
    }} ref={setRef}>
        <Button onClick={() => setOpen(!open)} iconProps={{
        Component: IconSettings
      }} type="tertiary" />
        <_NestedMenu {...args} onClose={() => setOpen(false)} parentRef={ref} menuItems={NestedItems} isOpen={open} position="bottom-left" />
      </div>
    </div>;
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const Ce=["Menu","NestedMenu"];export{s as Menu,r as NestedMenu,Ce as __namedExportsOrder,ve as default};
