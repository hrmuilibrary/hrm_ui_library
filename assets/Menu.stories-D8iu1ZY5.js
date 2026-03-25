import{j as e}from"./jsx-runtime-jyUgkTw7.js";import{r as i}from"./iframe-BdEtFhyL.js";import{M as C,N as I}from"./NestedMenu-gYJfc0Rz.js";import{B as b}from"./Button-DNFyd_v_.js";import{I as y}from"./IconArrowDownloadFilled-B_jTPRlp.js";import{I as g,a as h,b as x}from"./IconBeach-QDcZJbNG.js";import{I as M}from"./IconMore-I_aC-eji.js";import{I as O}from"./IconCheckmark-Drn5aRNL.js";import{I as n}from"./IconSettings-CRxgAOq7.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-Cfj99ue9.js";import"./index-Bh5VEtIv.js";import"./Text-BIsmiTeW.js";import"./helpers-BrcKB9Vj.js";import"./index-AboGxAif.js";import"./types-B10J7gf9.js";import"./Popover-3q1vxCz9.js";import"./IconDismiss-BfJIZhJ3.js";import"./Link-DCM8Pc9p.js";import"./index-DF4iYCah.js";import"./CollapseGroup-BomVDcHT.js";import"./Divider-BOMctxNo.js";import"./AnimatePresenceWrapper-B3VgkAZ4.js";import"./IconChevronDown--ZxKMSA0.js";import"./IconChevronUp-DN3jO606.js";import"./IconChevronRight-Cgcf34y8.js";import"./AvatarGroup-OAUV1-_I.js";import"./DropzoneFileUpload-BKvz-XgW.js";import"./Label-5T9rOiZS.js";import"./useFormProps-z-47XSOv.js";import"./ErrorMessage-D6LSUSv1.js";import"./IconDynamicComponent-DnCVpLmA.js";import"./Snackbar-ys2e2s6d.js";import"./Alert-lvzUJFIr.js";import"./IconDismissFilled-fQWXj-Th.js";import"./Progress-C1r4cIIV.js";import"./IconAdd-DUiaXDDX.js";import"./Checkbox-u_igeAYF.js";import"./IconInfo-O0DrFVue.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const ve=["Menu","NestedMenu"];export{s as Menu,r as NestedMenu,ve as __namedExportsOrder,fe as default};
