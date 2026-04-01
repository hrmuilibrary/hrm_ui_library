import{j as e}from"./jsx-runtime-BQxpd2ht.js";import{r as i}from"./iframe--D5vgDT_.js";import{M as C,N as I}from"./NestedMenu-DmTcZgTq.js";import{B as b}from"./Button-CaB49cki.js";import{I as y}from"./IconArrowDownloadFilled-BE5Ix8VR.js";import{I as g,a as h,b as x}from"./IconBeach-tpwns28E.js";import{I as M}from"./IconMore-BVpQE0fp.js";import{I as O}from"./IconCheckmark-DesYvmZz.js";import{I as n}from"./IconSettings-CZQbkT48.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-B--s8BaE.js";import"./index-BCKl1ZE5.js";import"./Text-AJEptl16.js";import"./helpers-CJDGN4oj.js";import"./index-AboGxAif.js";import"./types-DJbcFeiF.js";import"./Popover-C2Lexeb4.js";import"./IconDismiss-CjNwweel.js";import"./Link-C0THDajy.js";import"./index-8zuLJ1zv.js";import"./CollapseGroup-D5rr2pM5.js";import"./Divider-DoHnTauf.js";import"./AnimatePresenceWrapper-B8VPnYav.js";import"./IconChevronDown-GvPjXj68.js";import"./IconChevronUp-B8XCEPoW.js";import"./IconChevronRight-BY2t2lzx.js";import"./AvatarGroup-zHC3x737.js";import"./DropzoneFileUpload-DLv4wb7H.js";import"./Label-DBWIlef-.js";import"./useFormProps-DPZj28Bs.js";import"./ErrorMessage-CdgwXUh8.js";import"./IconDynamicComponent-6L_O8Omv.js";import"./Snackbar-DsnPBq31.js";import"./Alert-B4NBc6-x.js";import"./IconDismissFilled-lrVxBCnc.js";import"./Progress-DYqv9BOd.js";import"./IconAdd-Br7nDlwi.js";import"./Checkbox-BN9URe6S.js";import"./IconInfo-UcDs2Oik.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
